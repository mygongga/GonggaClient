/**  国际化脚本 **/
 
Vue.use(VueI18n);
var i18n = new VueI18n({
    locale: 'en',    // 语言标识
	messages : {
		en: {
			m: {
                en:'EN',
                cn:"CN",
                app_name:"Gongga Blockchain Peer",
                status:["......","connected and running"],
                lable:["Serial No: ","Status: ","Latest Block: ","Startup Time: ","GGA Token Balance: ","GGA Receive Address: ","Notice: Once you run this peer, GGA tokens will be automaticlly awarded to your account. Refer to the Instruction <u>for more information</u>.","Linkes: ",'View',"Peer Setup Time: "],
                botton:["NEXT","Transfer GGA","Close","Send","Cancel","Submit","GGA Forum"],
                create:["Please stup keystore Password <br/>(At least 6 digits containing letters and numbers)","Notice: The keystore password can not be modified or recovered, please keep it safely.","Please be sure to remember and safe save!"],
                input:["Set the password","Repeat the password"],
                save:"Download keystore file",
                msg_info:{
                    pwd:"The two passwords don't match",
                    tx:['Address cannot be empty','The Value can\'t be empty','The from address cannot be empty','Password cannot be empty','Lack of balance'],
                    save:['Please select a save path','Save success'],
                    transferFrom:['Unlock the failure','Password mistake']
                },
                rec:["Referrer's Gongga account (if available): ","optional","(General is nine or ten digits)"],
                tx:['The receiver address or Gongga account','Amount of tokens be sent','Keystore password','Transfer to help'],
                user:["Gongga account: ","Gongga user name: ",'To be generated'],
                up:{
                    "msg":"Found the new version, whether to update?",
                    "yes":"Yes",
                    "no":"No"
                },
                list:"Transfer record",
                tx_msg:"Transaction Submitted",
                help:"Help Desk",
                reset:"After resetting, the original user name, password, and account will be deleted on this client.are you sure to reset?",
                reset_btn:"Reset",
                peer_name:["*Please set a peer name (less than 12 A-Z or num)","optional","（Don't fill automatically generated）"],
                tip:"*This is the password set by yourself when you first ran this data peer program." ,
                opt:"Optional",  
                app:['Advanced operations', 'Keystore QR code', 'GGA App', 'GGA App','Using GGA App scan QR code to login '],
                is_syn:"Synchronizing...",
                referees:["Referrer","Set", "Referrer Reward" , "You Referred" ,"You have been rewarded" ,"more","Please enter the Gongga Account of Referrer (10-digit number)"],
                referees_tip:"Please login the APP modified",
                exchange:"Exchange",
                add_loading:"Is to create user, please wait...",
                win32:['Transfer GGA','There are two ways to send GGA token: 1. Click the “Backup Keystore File” button in the lower right corner to download your keystore file, then enter website te www.gonggawallet.com usi using PC computer, log in with your backup keystore file and password, and transfer the GGA; 2. Use the mobile phone to scan the APP QR code and install the GGA APP, then scan the keystore QR code and log in to transfer the GGA token.']

            }   
		},
		zh: {
			m: {
                en:'英语',
                cn:"中文",
                app_name:"Gongga 区块链数据节点",
                status:["......","挖矿运行中..."],
                lable:["节点编号：","联接状态：","当前区块号：","本次启动时间：","账户内GGA余额：","Gongga地址（接收GGA）：","说明：启动本节点服务后，将自动获取GGA Token，具体参见<u>GGA挖矿规则</u>。","相关链接：",'查看规则及说明',"节点启用时间： "],
                botton:["下一步","转发GGA","关闭节点","发送","放弃","提交","进入GGA 讨论区"],
                create:["请设置一个6位以上keystore密码，至少包含英文和数字","重要提示:该密码不可修改，您一旦丢失或遗忘，也将不可找回。","请务必牢记并稳妥保存！"],
                input:["设置密码","重复密码"],
                save:"备份Keystore文件",
                msg_info:{
                    pwd:"两次密码不一致",
                    tx:['地址不能为空','Value不能为空','from地址不能为空','密码不能为空','余额不足'],
                    save:['请选择保存路径','保存成功'],
                    transferFrom:['解锁失败','密码错误']
                },
                rec:["*推荐人的Gongga账号(如果有),","可不填","一般是9位或10位数字"],
                tx:['接收者地址或Gongga账号：','请输入发送给对方的token数量','请输入keystore密码，即初次启用程序时您设置的密码','转帐帮助'],
                user:["Gongga账号：","Gongga用户名：",'待生成'],
                up:{
                    "msg":"发现新版本，是否更新？",
                    "yes":"是",
                    "no":"否"
                },
                list:"查看转帐记录",
                tx_msg:"GGA转账申请已提交",
                help:"使用帮助",
                reset:"重置后，原有的用户名、密码、编号等将在本客户端删除，需要重新设置！",
                reset_btn:"重置用户",
                peer_name:["*任意为节点起名(限12个字母或4个汉字,不填自动生成)","可不填",""],
                tip:"该keystore密码，就是第一次启用本节点程序时，您设置的密码！",
                opt:"选填",
                app:['高级操作','显示keystore二维码','GGA App 下载','GGA App 下载','请在手机上用GGA APP 扫描登录'],
                is_syn:"同步中...",
                referees:["推荐人",  "设置" ,   "推荐奖励",   "您推荐的节点数",     "已获推荐奖励GGA","详情","请输入推荐人的Gongga账号（10位数字）" ],
                referees_tip:"请登录APP修改",
                exchange:"GGA交易",
                add_loading:"正在创建用户，请稍等...",
                win32:['转发GGA','将挖矿获得的GGA发送给其他人，有两种方法：<br /> 1、点击右下角的“备份Keystore文件”按钮，下载keystore文件，然后在电脑浏览器进入器进入www.gonggawallet.com, 用您, 用您之前下载的keystore文件及密码登录后转账；<br />  2、用手机扫描下面的GGA APP二维码，安装GGA专用APP，打开APP扫描keystore二维码，输入密码登录进行转账操作。 <br /><br />']
                
            }
		}
	}
});

$(document).ready(function(){
    
    i18n.locale = lang;//关键语句
});

