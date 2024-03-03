
import time
import urllib.request

def download_data(url):
    response = urllib.request.urlopen(url)
    data = response.read()
    return len(data)

def calculate_bandwidth(data_size, elapsed_time):
    bandwidth = data_size / elapsed_time
    return bandwidth

def main():
    # Replace the URL with a valid one pointing to a downloadable file
    url = "https://www.google.com/"

    start_time = time.time()
    data_size = download_data(url)
    end_time = time.time()

    elapsed_time = end_time - start_time
    bandwidth = calculate_bandwidth(data_size, elapsed_time)

    print(f"Downloaded {data_size} bytes in {elapsed_time:.2f} seconds")
    print(f"Bandwidth: {bandwidth:.2f} bytes/second")

    # Classify bandwidth based on general knowledge
    if bandwidth >= 10 * 1024:  # 10 KB/s or higher is considered good
        print("Good bandwidth.")
    elif 1 * 1024 <= bandwidth < 10 * 1024:  # Between 1 KB/s and 10 KB/s is considered bad
        print("Bad bandwidth.")
    else:  # Less than 1 KB/s is considered really bad
        print("Really bad bandwidth.")


if __name__ == "__main__":
    main()
