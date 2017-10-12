const spawn = require('child_process').spawn;

function shutdown(computerName, cb){
    let child = spawn('powershell.exe',['stop-computer -computername '+computerName +' -force']);

    child.on('exit',function(data){
        cb(null,data);
    });
}

module.exports = shutdown;
