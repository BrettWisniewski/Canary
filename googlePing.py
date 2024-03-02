from pythonping import ping

def check_ping(host='142.250.72.14', count=5):
    """
    Perform a ping request to the specified host and return packet loss and average time.
    """
    result = ping(host, count=count)
    packet_loss = result.packet_loss
    avg_time = result.rtt_avg
    return packet_loss, avg_time

def update_universal(packet_loss, avg_time):
    """
    Update the universal statistic based on packet loss and average ping time.
    """
    tracker = 0
    
    # Adjust tracker based on average ping time
    if avg_time >= 150:
        tracker += 1
    elif avg_time < 150 and avg_time >= 100:
        tracker += 0.8
    elif avg_time < 100 and avg_time >= 80:
        tracker += 0.2
    
    # Adjust tracker based on packet loss
    if packet_loss >= 5:
        tracker += 1
    elif packet_loss < 5 and packet_loss >= 3:
        tracker += 0.8
    elif packet_loss < 3 and packet_loss >= 2:
        tracker += 0.2
    
    return tracker

def main():
    packet_loss, avg_time = check_ping()
    #print(f'Packet Loss: {packet_loss}%')
    #print(f'Average Time: {avg_time} ms')
    universal_statistic = update_universal(packet_loss, avg_time)


if __name__ == "__main__":
    main()
