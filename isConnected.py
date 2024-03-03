import socket

def is_connected():
    try:
        # Attempt to resolve a common hostname (in this case, Google's DNS server)
        socket.gethostbyname("www.google.com")
        return True
    except socket.error:
        return False
