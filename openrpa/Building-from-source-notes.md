First create a Fork of the source code ( if you intend to modify it in any way )
Then clone the repository you created ( you need git installed, for windows you can get that [here](https://git-scm.com/download/win) )
```
git clone https://github.com/open-rpa/openrpa.git --recursive
```
replace url with your git url
If you cloned and forgot to add --recursive you will be missing the sub modules, you can install those after using

```
git submodule update --init
```
You need to install Visual Studio 2022 Community edition ( [download here](https://visualstudio.microsoft.com/downloads/) ) 
Once you open "openrpa.sln" you will get some errors, the first issue is missing .net developer packs.
You can ignore those and install those using the PatchVSCode project and some downloads.
You can download 4.0 [here](https://www.microsoft.com/en-us/download/details.aspx?id=28180) 
You can download 4.6.2 [here](https://dotnet.microsoft.com/en-us/download/dotnet-framework/thank-you/net462-developer-pack-offline-installer) 
Right click PatchVSCode and select it as start up project, then press run. This will "patch" your visual studio with the missing .net modules.
( press accept to override and allow to run as admin .. this will happen once per dotnet version needed, right now 4 times )

Close visual studio and reopen openrpa.sln 
Now you need to remove the two installer projects under the "installer" folder ( or [install vix](https://wixtoolset.org/docs/wix3/) )

Now, certain projects will only compile if you have the prerequisites installed, like SAP require you to SAP GUI client installed, remove all the projects where you don't meet the requirements ...

And now you should be ready to compile and test.