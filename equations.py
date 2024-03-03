from IspStatus import get_statistic_ispStatus
from router_lights_up import get_statistic_routerLightsUp
from power_supply import  get_statistic_powerSupply
from lostPackets import get_statistic_lostPackage
from timeLost import get_statistic_lostTime
from isConnected import is_connected
from latency import check_latency 

def get_final_stats():
    uni_statistic = 0
    if(is_connected()): 

        #print("ispStatus returned: ", end = "")
        internet_provider_status_stat = get_statistic_ispStatus()

        #print("ispStatus returned: ", end = "")
        latency_stat = check_latency()
        
        
        #print("routerLightsUp returned: ", end = "")
        router_light_up_stat = get_statistic_routerLightsUp()

        #print("get_statistic_powerSupply returned: ", end = "")
        power_supply_stat = get_statistic_powerSupply()

        #print("get_statistic_lostPackage returned: ", end = "")
        lost_package_stat = get_statistic_lostPackage()

        #print("get_statistic_timeLost returned: ", end = "")
        lost_time_stat = get_statistic_lostTime()

        # print("SANJAR")
        # print(internet_provider_status_stat)
        # print(router_light_up_stat)
        # print(power_supply_stat)
        # print(latency_stat)
        # print(lost_package_stat)
        # print(lost_time_stat)

        if internet_provider_status_stat == 1:
            return 100
        
        if(router_light_up_stat == 1):
            return 100
        if(power_supply_stat == 1):
            return 100
        

        if(latency_stat == "very_bad"):
            return 100
        elif(latency_stat == "bad"):
            return 70
        elif(latency_stat == "good"):
            return 30
        elif(latency_stat == "very_good"):
            return 0

        if(lost_package_stat >= 0.75):
            return 100
        elif (lost_package_stat >= 0.45):
            return 75
        elif (lost_package_stat >= 0.2):
            return 20
        elif (lost_package_stat == 0):
            return 0


        if(lost_time_stat == 1):
            return 100
        elif lost_time_stat == 0.75:
            return 75
        elif lost_time_stat == 0.5:
            return 50
        elif lost_time_stat == 0.3:
            return 30
        elif lost_time_stat == 0:
            return 0
        
        return uni_statistic
        
        

    else:
        return 100
    
    # ADDING DEAD CODE

get_final_stats()



