
from selenium import webdriver
from bs4 import BeautifulSoup
from selenium.webdriver.chrome.options import Options

statistic = 0

# Set up Chrome options to run in headless mode
chrome_options = Options()
chrome_options.add_argument("--headless")  # Uncomment this line to run in headless mode
chrome_options.add_argument("--disable-gpu")  # Add this line to disable GPU acceleration
chrome_options.add_argument("--window-size=1920x1080")  # Set a window size to avoid potential issues

# Specify a user agent to prevent detection of headless browser
chrome_options.add_argument("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3")

# Set up the Selenium WebDriver with configured options
driver = webdriver.Chrome(options=chrome_options)

# Open the webpage
driver.get("https://downdetector.com/status/verizon/boulder/")

# Wait for the page to fully load (you may need to adjust the wait time)
driver.implicitly_wait(10)

# Get the page source after JavaScript execution
page_source = driver.page_source

# Use Beautiful Soup to parse the HTML
soup = BeautifulSoup(page_source, 'html.parser')

# Find the <h2> element with the specified class and content
header_with_class_and_content = soup.find('div', class_='h2 entry-title')

message = header_with_class_and_content.text.strip()

# Check if the header is found before trying to access its text
if "indicate no current problems" in message:
    statistic = 0
    print("No current problems")
else:
    statistic = 1

# Close the browser
driver.quit()
