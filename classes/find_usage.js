var usage_search;
if (typeof parent.usage_search !== 'undefined') usage_search = usage_search.Fs;
else usage_search = new function () {
    this.find_file_usage = function(path, directory) {
        var dir_data = Fs.read_dir(directory);
        var content;
        var full_path;
        var usages = [];

        for(var i = 0;i < dir_data.files.length;i++) {
            full_path = directory + "/" + dir_data.files[i];
            content = Fs.read_file(full_path);

            console.log("File " + dir_data.files[i] + " contains - " + path + " "  + content.includes(Fs.parse(path).name));
            if(content.includes(Fs.parse(path).name)) {
                usages.push(dir_data.files[i]);
            }
        }

        return usages;
    }

    this.find_function_usage = function () {

    }
}
