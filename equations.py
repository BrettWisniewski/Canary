from IspStatus import get_statistic_ispStatus
from router_lights_up import get_statistic_routerLightsUp
from power_supply import  get_statistic_powerSupply
from lostPackets import get_statistic_lostPackage
from timeLost import get_statistic_lostTime
from isConnected import is_connected
from latency import check_latency 

def get_final_stats():
    if(is_connected()):
         
        list = []
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

        print("SANJAR")
        print(internet_provider_status_stat)
        print(router_light_up_stat)
        print(power_supply_stat)
        print(latency_stat)
        print(lost_package_stat)
        print(lost_time_stat)
        
        
        
        # STOP HERE
        if internet_provider_status_stat == 1:
            return [100, 1]
        else:
            list.append(0)

        
        if(router_light_up_stat == 1):
            return [100, 1]
        else:
            list.append(0)
        if(power_supply_stat == 1):
            return [100, 1]
        else:
            list.append(0)

        if(latency_stat == "very_bad"):
            return [100,1]
        elif(latency_stat == "bad"):
            list.append(70)
        elif(latency_stat == "fine"):
            list.append(30)
        elif(latency_stat == "very_good"):
            list.append(0)
        else:
            list.append(0)

        if(lost_package_stat >= 0.75):
            return [100,1]
        elif (lost_package_stat >= 0.45):
            list.append(75)
        elif (lost_package_stat >= 0.2):
            list.append(20)
        elif (lost_package_stat == 0):
            list.append(0)
        else:
            list.append(0)


        if(lost_time_stat == 1):
            return [100,1]
        elif lost_time_stat == 0.75:
            list.append(75)
        elif lost_time_stat == 0.5:
            list.append(50)
        elif lost_time_stat == 0.3:
            list.append(30)
        elif lost_time_stat == 0:
            list.append(0)
        else:
            list.append(0)

        list = sorted(list, reverse = True)
        temp = ((list[0] + list[1]*(0.5)+ list[2]*(0.25)))
        temp  =  ((100) if (temp > 100) else (temp))
        print("DELETE THIS AFTER")
        return [temp, temp/100]
    
    else:
        return [100,1]