import psutil
#make sure other laptops have psutil libary too.
def check_battery():
    battery = psutil.sensors_battery()
    if battery is not None:
        percent = battery.percent
        if percent <= 15:
            return True
    return False

def send_message(message):
    # This function can be customized to send the message in your preferred way,
    # such as via email, SMS, or through a messaging service.
    print(message)


def get_statistic_powerSupply():
    statistic = 0
    battery_info = check_battery()
    if battery_info:
        statistic = 1
    return statistic