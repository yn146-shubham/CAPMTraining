# Getting Started
Sample ENV

VCAP_SERVICES={<<Your Hana DB Connection>>}
destinations=[{"name":"Northwind","url":"https://services.odata.org/V2/Northwind/Northwind.svc","proxyHost":"http://127.0.0.1","proxyPort":"8887"}]

# Setting up remote debugging

### Replace the name CAPMTraining-srv with your service name

1. Check if SSH is enabled for your application:
    ```bash
   cf ssh-enabled CAPMTraining-srv
   ```

2. Enable SSH (one-time setup):
    ```bash
    cf enable-ssh CAPMTraining-srv
    ```
3. Restart the application:
   ```bash
   cf restart CAPMTraining-srv
    ```
4. SSH into the application container:
   ```bash
   cf ssh CAPMTraining-srv
    ```
5. List running processes and identify Node.js process ID:
   ```bash
   ps aux
    ```
6. Enable debug mode by sending USR1 signal:
    ```bash
    kill -usr1 <ProcessID>
    ```
   This will start the Node.js debugger on port 9229.

7. Open a new terminal and create SSH tunnel:
   ```bash
   cf ssh -N -L 9229:127.0.0.1:9229 CAPMTraining-srv
    ```
8. Update your VS Code debugger configuration (.vscode/launch.json):
    ```bash

   {
     "name": "Attach to a Cloud Foundry Instance on Port 9229",
     "port": 9229,
     "request": "attach",
     "type": "node",
     "localRoot": "${workspaceFolder}",
     "remoteRoot": "/home/vcap/app"
   }
    ```
9. Start debugging in VS Code:
   - Go to Run & Debug
   - Select "Attach to a Cloud Foundry Instance on Port 9229"
   - Click Start Debugging

---

