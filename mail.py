import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def send_email(sender_email, receiver_emails, subject, message, smtp_server, smtp_port, smtp_username, smtp_password):
    # Create the MIME object
    msg = MIMEMultipart()
    msg['From'] = sender_email
    msg['To'] = ', '.join(receiver_emails)
    msg['Subject'] = subject

    # Attach the message to the email
    msg.attach(MIMEText(message, 'plain'))

    # Connect to the SMTP server
    with smtplib.SMTP(smtp_server, smtp_port) as server:
        # Login to the email account
        server.starttls()
        server.login(smtp_username, smtp_password)

        # Send the email
        server.sendmail(sender_email, receiver_emails, msg.as_string())



# Email Parameters, CHANGE THIS WHEN UI IS IMPLEMENTED
sender_email = "canaryhackcu@gmail.com"
receiver_emails = ["carsondc@colostate.edu", "brettwis@colostate.edu"]

#Modify these later
subject = "Hello from Python!"
message = """
Enter actual message here!
"""


# Server specifications + info about canary email third party api access
# This will not change, prob make will encrypt later
smtp_server = "smtp.gmail.com"
smtp_port = 587
smtp_username = "canaryhackcu@gmail.com"
smtp_password = "ozey uyye xjgo nmbw"

# Send the email
send_email(sender_email, receiver_emails, subject, message, smtp_server, smtp_port, smtp_username, smtp_password)

print("Email sent successfully!")