RegisterNetEvent("bit-alerts:sendAlert")
AddEventHandler("bit-alerts:sendAlert", function(alertType, alertTitle, alertMessage, alertTime)
    local alertInfo = {
        type = alertType,
        title = alertTitle,
        message = alertMessage
    }
    SetDisplay(not display, alertInfo)
    Citizen.Wait(alertTime)
    SetDisplay(false)
end)

function SetDisplay(bool, alertInfo)
    display = bool
    SendNUIMessage({
        type = "ui",
        status = bool,
        alertinfo = alertInfo
    })
end

-- Trigger from client:
-- TriggerEvent("bit-alerts:sendAlert", "check", "Success", "This is an success notification", 5000)

-- Trigger from server:
-- TriggerClientEvent("bit-alerts:sendAlert", playerID, "check", "Success", "This is an success notification", 5000)

