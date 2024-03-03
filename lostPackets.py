import asyncio
from pythonping import ping

async def check_ping(host='142.250.72.14', count=5):
    """
    Perform a ping request to the specified host and return packet loss and average time.
    """
    result = ping(host, count=count)
    packet_loss = result.packet_loss
    avg_time = result.rtt_avg
    return packet_loss, avg_time

def update_universal(packet_loss):
    """
    Update the universal statistic based on packet loss and average ping time.
    """
    tracker = 0
    
    # Adjust tracker based on packet loss
    if packet_loss >= 3:
        return 0.75
    elif packet_loss == 2:
        return 0.45
    elif packet_loss == 1:
        return 0.2
    return tracker

async def start():
    packet_loss, avg_time = await check_ping()
    # print(f'Packet Loss: {packet_loss}')
    # print(f'Average Time: {avg_time} ms')

    statistic = update_universal(packet_loss)
    return statistic 
    

def get_statistic_lostPackage():
    return asyncio.run(start())
