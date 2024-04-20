import re

def convert_url(original_url):
    # Extract the unique identifier from the original URL using regular expression
    match = re.search(r'/thumbs(/[\w/]+)\.mp4/', original_url)
    if match:
        unique_id = match.group(1)
        # Construct the new URL format
        new_url = f"https://media.theync.com/videos{unique_id}.mp4"
        return new_url
    else:
        return "Invalid URL format"

def main():
    # Prompt the user to enter the URL
    original_url = input("Enter the original URL to convert: ")
    
    # Convert the URL
    converted_url = convert_url(original_url)
    
    # Print the converted URL
    print("Converted URL:", converted_url)

if __name__ == "__main__":
    main()
