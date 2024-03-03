import asyncio
from pythonping import ping

async def check_ping(host='142.250.72.14', count=5):
    """
    Perform a ping request to the specified host and return packet loss and average time.
    """
    result = ping(host, count=count)
    packet_loss = result.packet_loss
    timeSpent = result.rtt_avg
    return packet_loss, timeSpent

def update_universal(timeSpent):
    """
    Update the universal statistic based on packet loss and average ping time.
    """
    
    # Adjust tracker based on packet loss
    if timeSpent >= 150:
        return 1
    elif timeSpent < 150 and timeSpent >= 100:
        return 0.8
    elif timeSpent < 100 and timeSpent >= 80:
        return 0.2
    elif timeSpent < 80 and timeSpent >= 50:
        return 0.1
    return 0

async def start():
    packet_loss, timeSpent = await check_ping()
    # print(f'Packet Loss: {packet_loss}')
    # print(f'Average Time: {timeSpent} ms')

    statistic = update_universal(timeSpent)
    return statistic 
    

def get_statistic_lostTime():
    return asyncio.run(start())
