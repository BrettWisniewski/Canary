# I want to import a function from equations.py

from IspStatus import get_statistic_ispStatus
from router_lights_up import get_statistic_routerLightsUp
from power_supply import  get_statistic_powerSupply
from lostPackets import get_statistic_lostPackage
from timeLost import get_statistic_lostTime
from isConnected import is_connected
from latency import check_latency 
from equations import get_final_stats


def api_func():
    
    stats_of_network = get_final_stats()
    
    # check if value 0.9 or greater which indicates probability of internet connection
    if stats_of_network[1] >= 0.9:
        return True
    else:
        return False