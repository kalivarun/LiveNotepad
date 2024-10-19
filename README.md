# LiveNotepad

To run this program, you need to install **Node.js** on your system.


Download all the source code files in your system

```bash
git clone https://github.com/kalivarun/LiveNotepad.git
```


## Install Node Modules

Run the following command to install all necessary dependencies:

```bash
npm install
```
Also install express and socket.io modules if needed (optional).

```bash
npm install express socket.io
```

Next step...

```bash
┌──(root㉿Stoic)-[~/LIVE-NOTEPAD]
└─# ls 
node_modules  package-lock.json  package.json  public  server.js
```

```bash
┌──(root㉿Stoic)-[~/A:/LIVE-NOTEPAD]
└─# node server.js                                                            
Server is running on http://localhost:3000
```
![Uploading image.png…](https://github.com/kalivarun/LiveNotepad/blob/main/images/livenotepad.png)

Now the website is running in localhost in port 3000.

How to host localhost website as public website ?
We can use [serveo.net](http://serveo.net/) for hosting. For more information, check this [link](http://serveo.net/).


```bash
┌──(root㉿Stoic)-[/var/www/html]
└─# ssh -R livenotepad:80:localhost:3000 serveo.net
Forwarding HTTP traffic from https://livenotepad.serveo.net
```

we have used port forwarding method to host our website in public using ssh and serveo.net.

[Watch the demo video](https://s7.ezgif.com/tmp/ezgif-7-b24e1fc95b.gif)


