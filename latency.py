import time
import requests

url = "https://www.example.com"  # Replace with the URL you want to test

start = time.perf_counter()  # Record the starting time

# Your code that involves a network operation
response = requests.get(url)

end = time.perf_counter() - start  # Calculate the elapsed time

print('{:.6f}s for the network operation'.format(end))  # Print the elapsed time in seconds


if end >= 0.1 and end < 0.2:
    # Bad latency
    print("The network operation is slow")
    # Add weights here later
elif end >= 0.2:
    # Very bad latency
    print("The network operation is very slow")
    # Add even higher weights here later
else:
    # Good latency
    print("0")
    # the weights will be 0 if the latency is low 

