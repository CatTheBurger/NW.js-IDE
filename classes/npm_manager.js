var npm_manager;
if (typeof parent.npm_manager !== 'undefined') npm_manager = parent.npm_manager;
else npm_manager = new function () {
    var cp = require('child_process');

    this.dialog = function() {
        var cnt = `
            <div style="width: 300px;">
    			<div>
                    <input id="npm_text" style="width: 100%;" />
                    <div id="text"></div>
                </div>
    			<br>
    			<div align="center">
                    <button class="btn_pad" id="nf_action" onclick="npm_manager.install(document.getElementById('npm_text').value); document.getElementById('text').innerHTML = 'Установка';">Установить</button>
                    <button class="btn_pad" id="nf_action" onclick="Dial.close();">Отменить</button>
                </div>
            </div>
		`;

		Dial.custom_dialog('Установить NPM', cnt);
    };

    this.install = function(npm) {
        var install = cp.spawn("npm", ["--prefix", Project.path,"install", npm]);
        Debug.open();
        var _error = 0;
        console.log(Project.path);

        install.stdout.on("data", data => {
            console.log(`stdout: ${data}`);
        });

        install.stderr.on("data", data => {
            console.log(`stderr: ${data}`);
        });

        install.on('error', (error) => {
            _error = 1;
            Debug.msg("NPM не устновлен. Произошла ошибка: " + error);
            Dial.close();
        });

        install.on("close", code => {
            if(_error != 0) return;

            Debug.msg("NPM был успешно устновлен");
            Dial.close();
        });
    };

    this.list = function() {
        Pages.add("../pages/npm_manager.html", "Управление NPM");
    };
}
