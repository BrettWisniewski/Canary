from IspStatus import get_statistic_ispStatus
from router_lights_up import get_statistic_routerLightsUp
from power_supply import  get_statistic_powerSupply
from lostPackets import get_statistic_lostPackage
from timeLost import get_statistic_lostTime

print("ispStatus returned: ", end = "")
print(get_statistic_ispStatus())

print("routerLightsUp returned: ", end = "")
print(get_statistic_routerLightsUp())

print("get_statistic_powerSupply returned: ", end = "")
print(get_statistic_powerSupply())

print("get_statistic_lostPackage returned: ", end = "")
print(get_statistic_lostPackage())


print("get_statistic_timeLost returned: ", end = "")
print(get_statistic_lostTime())

print("Delete this print statement")