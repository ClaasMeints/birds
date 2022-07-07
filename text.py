with open('birdnames.txt') as file:
    lines = file.readlines()
    for line in lines:
        german = {ord('ä'):'ae', ord('ü'):'ue', ord('ö'):'oe', ord('ß'):'ss'}
        print('\'' + line.lower().replace('\n', '').translate(german) + '\',')