import subprocess
import socket

def get_own_ip_address():
    try:
        # Create a socket object
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        
        # Connect to a remote server (doesn't actually send any data)
        s.connect(('8.8.8.8', 80))
        
        # Get the local IP address bound to the socket
        ip_address = s.getsockname()[0]
        
        # Close the socket
        s.close()
        
        return ip_address
    except Exception as e:
        print("An error occurred:", e)
        return None
    

def check_network_status(own_ip_address):
    try:
        # Use subprocess to run the ping command
        result = subprocess.run(['ping', '-c', '1', own_ip_address], stdout=subprocess.PIPE, stderr=subprocess.PIPE, timeout=5)
        
        if result.returncode == 1:
            return True
        else:
            return False
    except subprocess.TimeoutExpired:
        return False
    except Exception as e:
        print("An error occurred:", e)
        return False

def get_statistic_routerLightsUp():
    statistic = 0
    own_ip_address = get_own_ip_address()

    if check_network_status(own_ip_address):
        
        statistic = 0
    else:
        
        statistic = 1

    return statistic


