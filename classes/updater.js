var Updater;
if (typeof parent.Updater !== 'undefined') Updater = parent.Updater;
else Updater = new function () {
    this.rep = "https://raw.githubusercontent.com/CatTheBurger/NW.js-IDE/master/VERSION";
    this.updateArchive = "http://github.com/CatTheBurger/NW.js-IDE/archive/master.zip";

    this.checkForUpdates = function() {
        var ajax = new XMLHttpRequest();

        ajax.open('GET', this.rep, true);

        ajax.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var repVer = this.responseText.trim();

                console.log("Git version = " + this.responseText);
                console.log("App version = " + IDE.version);

                var cnt = `
        			<div style="display: flex;">
        				Для NW.JS IDE вышло обновшение (v` + repVer + `)
                        Хотите его устноваить?
        			</div>
        			<br>
        			<div align="center">
                        <button id="make_update" class="btn_pad" onclick="Updater.doUpgrade();">Устновить</button>
                        <button id="cancel_update" class="btn_pad" onclick="Dial.close();">Позже</button>
                    </div>
        		`;

                if (IDE.version != repVer)
                    Dial.custom_dialog('Обновление NW.JS IDE', cnt);
            }
        };

        ajax.send();
    }

    this.doUpgrade = function() {
        var _path = require("path");
        var path =  _path.dirname(process.execPath);
        console.log(path);

        Fs.download("http://localhost/upd.zip", path + "/update.zip", function(progress) {
            console.log(progress);
            Debug.msg("Скачивание обновления: " + parseInt(progress) + "%");
        }, function () {
            Debug.msg("Скачивание обновления завершено");
            console.log(1);
            Fs.unpack(path + '/update.zip',  path, 'zip', function () {
                console.log("extracted");
                Debug.msg("Распаковка обновления завершена");
                Fs.del_file(path + '/update.zip');
            }, function(err) {
                console.log("ERROR!");
            });
        }, function (msg) {
            console.log(msg);
        });

    }
}
