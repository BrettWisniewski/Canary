import psutil
#make sure other laptops have psutil libary too.
def check_battery():
    battery = psutil.sensors_battery()
    if battery is not None:
        percent = battery.percent
        if percent <= 15:
            return [True, percent]
    return [False, percent]

def send_message(message):
    # This function can be customized to send the message in your preferred way,
    # such as via email, SMS, or through a messaging service.
    print(message)


def get_statistic_powerSupply():
    statistic = 0
    battery_info_list = check_battery()
    battery_info_boolean = battery_info_list[0]
    battery_percentage = battery_info_list[1]
    if battery_info_boolean:
        statistic = 1
    if statistic == 0:
        return [0, battery_percentage]
    return [1, battery_percentage]