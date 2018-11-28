#!/usr/bin/python
# -*- coding: UTF-8 -*-
# 文件名：node.py

from web3 import Web3, HTTPProvider
import json
import time
import urllib.request
import urllib.parse
from apscheduler.schedulers.blocking import BlockingScheduler
import os
import time

appdata=""
if os.name=="nt":
    appdata=os.getenv('APPDATA')
else:
    appdata=os.path.expanduser("~/Library/Application Support")

w3 = Web3(HTTPProvider('http://127.0.0.1:8545'))

f= open(appdata+'/GonggaPeer/stime',"a+")
size=os.path.getsize(appdata+'/GonggaPeer/stime')

if size==0:
    f.write(time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()))
    stime=time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
else:    
    stime=f.readline()
f.close()



startTime=time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())

def send_node():  
    try:      
        
        j={}
        j['ver']="win64_2.0"
        j['stime']=stime
        j['starttime']=startTime
        j["id"]=get_id(w3.admin.nodeInfo.enode)
        j["ip"]=w3.admin.nodeInfo.ip
        j["block"]=w3.eth.blockNumber
        j["account"]='' if len(w3.personal.listAccounts)==0 else w3.personal.listAccounts[0]
        j["list"]=[]
        for node in w3.admin.peers:
            j["list"].append({"id":node['id'],"ip":node['network']["remoteAddress"]})
        

        
    except:
        # scheduler.shutdown(wait=False)
        print("error")
    data =  {"data":json.dumps(j)}
    test_data_urlencode =urllib.parse.urlencode(data).encode('utf-8')
    requrl = "http://n.gongga.org/api/update_node"
 
    request = urllib.request.Request(requrl, test_data_urlencode)
    
    html = urllib.request.urlopen(request).read().decode('utf-8')
    print(html)
    # print (json.loads(html)["code"])  
          
def get_id(enode):
    enode=enode.split('@')
    return enode[0].replace("enode://","")

def log(msg):
    f= open(appdata+'/GonggaPeer/log',"a+")
    f.write(time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()))
    f.write('\n')
    f.write(msg)
    f.write('\n')
    f.write("=============")
    f.write('\n') 
    f.close()

def get_nodeid():
    f= open(appdata+'/GonggaPeer/nodeid',"w")
    size=os.path.getsize(appdata+'/GonggaPeer/nodeid')
    if size==0:
        f.write(w3.admin.nodeInfo.id)
        scheduler.remove_job('get_nodeid')
    else:    
        nid=f.readline()
        if nid!=w3.admin.nodeInfo.id:
            f.write(w3.admin.nodeInfo.id)
            scheduler.remove_job('get_nodeid')
    f.close()

scheduler = BlockingScheduler()
 

scheduler.add_job(send_node,'interval',  max_instances=10, seconds=180,  id='send_node')
scheduler.add_job(get_nodeid,'interval',  max_instances=10, seconds=10,  id='get_nodeid')



try:
    scheduler.start()
except:
    scheduler.shutdown(wait=False)
    print("exit")
