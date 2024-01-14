# BIT-ALERTS
A freely available script created by BIT for notifications in Fivem.

## Discord
https://discord.com/invite/qApkS3ypxs

## Image
![Image](https://i.ibb.co/qFyrWYz/bitalert.png)

## Trigger

**from client**
```lua
TriggerEvent("bit-alerts:sendAlert", "check", "Success", "This is an success notification", 5000)
```

**from server**
```lua
TriggerClientEvent("bit-alerts:sendAlert", playerID, "check", "Success", "This is an success notification", 5000)
```
