from IspStatus import get_statistic_ispStatus
from router_lights_up import get_statistic_routerLightsUp
from power_supply import  get_statistic_powerSupply
from lostPackets import get_statistic_lostPackage
from timeLost import get_statistic_lostTime
from isConnected import is_connected
from latency import check_latency
import collections



def get_final_stats():
    dictionaryAsArgument = {}
    if(is_connected()):

        list = []
        #print("ispStatus returned: ", end = "")
        internet_provider_status_stat_list = get_statistic_ispStatus()
        internet_provider_status_stat = internet_provider_status_stat_list[0]
        internet_provider_status_stat_status = internet_provider_status_stat_list[1]

        dictionaryAsArgument['Internet Service Provider'] = internet_provider_status_stat_status

        #print("ispStatus returned: ", end = "")
        latency_stat = check_latency()
        
        
        #print("routerLightsUp returned: ", end = "")
        router_light_up_stat_list = get_statistic_routerLightsUp()
        router_light_up_stat = router_light_up_stat_list[0]
        router_light_up_stat_status = router_light_up_stat_list[1]
        dictionaryAsArgument['Router Light'] = router_light_up_stat_status


        #print("get_statistic_powerSupply returned: ", end = "")
        power_supply_stat_list = get_statistic_powerSupply()
        power_supply_stat = power_supply_stat_list[0]
        power_supply_stat_status =  power_supply_stat_list[1]

        dictionaryAsArgument['Power supply'] = power_supply_stat_status

        #print("get_statistic_lostPackage returned: ", end = "")
        lost_package_stat_list = get_statistic_lostPackage()
        lost_package_stat = lost_package_stat_list[0]
        lost_package_stat_status = lost_package_stat_list[1]

        dictionaryAsArgument['Lost Packages'] = lost_package_stat_status


        #print("get_statistic_timeLost returned: ", end = "")
        lost_time_stat_list = get_statistic_lostTime()
        lost_time_stat = lost_time_stat_list[0]
        lost_time_stat_status = lost_time_stat_list[1]

        dictionaryAsArgument['Time Spent Pinging'] = lost_time_stat_status

        # print("SANJAR")
        # print(internet_provider_status_stat)
        # print(router_light_up_stat)
        # print(power_supply_stat)
        # print(latency_stat)
        # print(lost_package_stat)
        # print(lost_time_stat)
        
        
        
        # STOP HERE
        if internet_provider_status_stat == 1:
            return [100, dictionaryAsArgument]
        else:
            list.append(0)

        
        if(router_light_up_stat == 1):
            return [100, dictionaryAsArgument]
        else:
            list.append(0)
        if(power_supply_stat == 1):
            return [100,dictionaryAsArgument]
        else:
            list.append(0)

        if(latency_stat == "very_bad"):
            return [100,dictionaryAsArgument]
        elif(latency_stat == "bad"):
            list.append(70)
        elif(latency_stat == "fine"):
            list.append(30)
        elif(latency_stat == "very_good"):
            list.append(0)
        else:
            list.append(0)

        if(lost_package_stat >= 0.75):
            return [100, dictionaryAsArgument]
        elif (lost_package_stat >= 0.45):
            list.append(75)
        elif (lost_package_stat >= 0.2):
            list.append(20)
        elif (lost_package_stat == 0):
            list.append(0)
        else:
            list.append(0)


        if(lost_time_stat == 1):
            return [100,dictionaryAsArgument]
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
       
        return [temp, dictionaryAsArgument]
    
    else:
        #print("")
        return [100,dictionaryAsArgument]