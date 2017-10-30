const spawn = require('child_process').spawn;

/**
 *Shuts down specified computer and then performs callback
 * @param {String} computerName - name of targeted device
 * @param {callbackFunction} cb - function to perform after shutdown command finishes
 */

function shutdown(computerName, cb){
    let child = spawn('powershell.exe',['stop-computer -computername '+computerName +' -force']);

    child.on('exit',function(data){
        cb(null,data);
    });
}

module.exports = shutdown;
