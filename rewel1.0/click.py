
import sys
# try:
#         xclick=int(sys.argv[1])
#         yclick=int(sys.argv[2])
#         try:
#                 delay=int(sys.argv[3])
#         except:
#                 delay=0
# except:
#         print "USAGE mouseclick [int x] [int y] [optional delay in seconds]"
#         exit()
#
# print "mouse click at ", xclick, ",", yclick," in ", delay, "seconds"


import time
from Quartz.CoreGraphics import CGEventCreateMouseEvent
from Quartz.CoreGraphics import CGEventPost
from Quartz.CoreGraphics import kCGEventMouseMoved
from Quartz.CoreGraphics import kCGEventLeftMouseDown
from Quartz.CoreGraphics import kCGEventLeftMouseUp
from Quartz.CoreGraphics import kCGEventRightMouseDown
from Quartz.CoreGraphics import kCGEventRightMouseUp
from Quartz.CoreGraphics import kCGMouseButtonLeft
from Quartz.CoreGraphics import kCGHIDEventTap

def mouseEvent(type, posx, posy):
        theEvent = CGEventCreateMouseEvent(None, type, (posx,posy), kCGMouseButtonLeft)
        CGEventPost(kCGHIDEventTap, theEvent)

def mousemove(posx,posy):
        mouseEvent(kCGEventMouseMoved, posx,posy);

def mouseclick(posx,posy):
        mouseEvent(kCGEventMouseMoved, posx,posy); #uncomment this line if you want to force the mouse to MOVE to the click location first (i found it was not necesary).
        mouseEvent(kCGEventLeftMouseDown, posx,posy);
        mouseEvent(kCGEventLeftMouseUp, posx,posy);
def rightclick(posx,posy):
        mouseEvent(kCGEventMouseMoved, posx,posy); #uncomment this line if you want to force the mouse to MOVE to the click location first (i found it was not necesary).
        mouseEvent(kCGEventRightMouseDown, posx,posy);
        mouseEvent(kCGEventRightMouseUp, posx,posy);

# time.sleep(delay);

tab1 = 100
tab2 = 350



running = True;
while True:
    print "********************************************************************"
    print "Begin by copying the company name into the clipboard";
    # exit = raw_input("Press Enter to begin or 'X' to Exit...");
    # if exit == "X" or exit == "x":
    #     continue;

    ranking = raw_input("Enter Ranking (1,2,3) to begin...")

    #------------Open New App--------------
    mouseclick(100, 20); #click tab1
    mouseclick(914, 244); #click +


    #------------Ranking--------------
    if ranking == "X" or ranking == "x":
        continue;
    mouseclick(470, 270); #click ranking
    # mouseclick(470, 270); #click ranking
    time.sleep(0.2);
    if ranking == "1":
        mouseclick(440, 290); #select 1
    elif ranking == "2":
        mouseclick(440, 315); #select 1
    elif ranking == "3":
        mouseclick(440, 335); #select 1

    #------------Status--------------
    mouseclick(860, 270);#click status
    time.sleep(0.5);
    mouseclick(860, 295);#click applied
    time.sleep(0.5);

    #------------Website--------------
    mouseclick(tab2, 20);#click tab 2
    time.sleep(0.7);

    rightclick(250, 50); #right click options
    time.sleep(0.3);
    mouseclick(300, 80); #copy url
    # raw_input("Pause...")#pause
    # mouseclick()
    mouseclick(tab1, 20);#click tab 1
    time.sleep(0.3);
    mouseclick(860, 430);#click website
    time.sleep(0.3);
    rightclick(860, 430);
    time.sleep(0.3);
    mouseclick(900, 530); #paste url

    #------------Title--------------
    # mouseclick(tab2, 20);#click tab 2
    # title = raw_input("Copy job title and hit Enter...")
    # if title == "X" or title == "x":
    #     continue;
    mouseclick(tab1, 20);#click tab 1
    # mouseclick(860, 360);#click job title
    # rightclick(860, 360);
    # time.sleep(0.3);
    # mouseclick(910, 460);#paste job title
    time.sleep(0.3);

    #------------AppliedVia--------------
    mouseclick(860, 600);#paste job title
    time.sleep(0.3);
    mouseclick(860, 680);#Angelist
    time.sleep(0.3);

    #------------Company Name--------------
    # mouseclick(860, 200); #click searchcompanies
    # rightclick(860, 200);
    # time.sleep(0.3);
    # mouseclick(910, 300); #paste




print "goodbye."
