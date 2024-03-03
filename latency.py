import time
import requests

def check_latency():
    url = "https://www.example.com"  # Replace with the URL you want to test

    start = time.perf_counter()  # Record the starting time

# Your code that involves a network operation
    response = requests.get(url)

    end = time.perf_counter() - start  # Calculate the elapsed time

    #print('{:.6f}s for the network operation'.format(end))  # Print the elapsed time in seconds


    if end >= 0.4 and end < 0.6:
        # Good latency
        return "fine"
        # Add weights here later
    elif end >= 0.6 and end < 1.5:
        # bad latency
        return "bad"
        # Add even higher weights here later
    elif end < 0.4:
        # very Good latency
        return "very_good"
    else:
        # very bad latency
        return "very_bad"

