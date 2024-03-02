import psutil
#make sure other laptops have psutil libary too.
def check_battery():
    battery = psutil.sensors_battery()
    if battery is not None:
        percent = battery.percent
        if percent <= 10:
            return [True, percent]
    return [False, percent]

def send_message(message):
    # This function can be customized to send the message in your preferred way,
    # such as via email, SMS, or through a messaging service.
    print(message)

if __name__ == "__main__":
    list = check_battery()
    if list[0] == True:
        send_message("Battery is low at {0}".format(list[1]))
