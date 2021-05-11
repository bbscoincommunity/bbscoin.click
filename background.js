chrome.app.runtime.onLaunched.addListener(function () {
    chrome.app.window.create('index.html', {
        frame: 'chrome',
        bounds: {
            width: 1024,
            height: 768
        },
        minWidth: 1024,
        minHeight: 768
    });
});
chrome.commands.onCommand.addListener(function (command) {
    console.log("Command triggered: " + command);
    if (command == "cmdNew") {
        chrome.app.window.create('index.html', {
            frame: 'chrome',
            bounds: {
                width: 1024,
                height: 768
            },
            minWidth: 1024,
            minHeight: 768
        });
    }
});