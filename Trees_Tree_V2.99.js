function textC(text,font,color,size,stroke,other,otherEND){
    var e = document.createElement('canvas')
    var c = e.getContext('2d')
    e.height = size||30
    e.width = 200
    font = font||'20px Comic Sans MS'
    c.font = font
    if(other){
        other(c)
    }
    if(!stroke){
        c.fillStyle = color||'white'
        c.fillText(text,0, +(font.split('px')[0]),200)
    }else{
        c.strokeStyle = color||'white'
        c.strokeText(text,0, +(font.split('px')[0]),200)
    }
    if(otherEND){
        otherEND(c)
    }
    return e.toDataURL('image/jpg',0.5)
}
var trollboxMessagesSent = 0
var trollboxMessagesSentThisMinute = 0;
var trollboxMessagesSentMinute = []
var ball = ['Yes.','No.','I think so.','Maybe?','Ask again later.','Pretty sure.','Not at all.','Probably.','Probably not.','I think so?','Not that I remember.']
var nball = ['of course you uneducated paperclip','of course not. I bet you eat Nintendo switch cartridges of fortnity-nite for breakfast','idk dude, btw i dont care, btw fuck u','ahh im 2much lazy 2 answer now, ask again later','dude idgaf, that question is a crap, i ll not respont it','OMG NO, OFC NO, R YA CRAZZZZZZYYYY?','hm? What? Sorry, I was too busy staring at that ugly mask of yours. Whats that? Its not a mask?']
var leaves = 0
var joins = 0
var LMoS = 0
var TS = 0
setInterval(function(){
    TS += 0.1
},100)
function getAvarage(array){
    var e = 0;
    for(let i = 0;i < array.length;i++){
        e = e + array[i]
    }
    return Math.round(e / array.length)
}
setInterval(function(){
    trollboxMessagesSentMinute.push(trollboxMessagesSentThisMinute)
    trollboxMessagesSentThisMinute = 0
},60000)
var thisDate;
socket.on('message',function(data){
       console.log((time+',  '+data.nick+':  '+data.msg).slice(10000))
        if(TS > LMoS){
        LMoS = TS
        }
        TS = 0
        trollboxMessagesSent++
        trollboxMessagesSentThisMinute++
        thisDate = new Date();
        data.msg = decodeHtmlEntity(data.msg)
    if(data.msg.startsWith('.')){
        data.msg = data.msg.slice(1)
        if(data.msg.startsWith('toImage ')){
            socket.emit('message',textC(data.msg.slice(8)))
        }
        if(data.msg.startsWith('long ')){
            socket.emit('message',textC(data.msg.slice(5),0,0,60,0,function(f){
            f.scale(1,2)
                }))
        }
        if(data.msg.startsWith('big ')){
            socket.emit('message',textC(data.msg.slice(4),'40px Comic Sans MS',0,50))
        }
        if(data.msg.startsWith('bigg ')){
            socket.emit('message',textC(data.msg.slice(5),'100px Comic Sans MS',0,110))
        }
        if(data.msg.startsWith('red ')){
            socket.emit('message',textC(data.msg.slice(4),0,'red'))
        }
        if(data.msg.startsWith('green ')){
            socket.emit('message',textC(data.msg.slice(6),0,'lime'))
        }
        if(data.msg.startsWith('neon ')){
            socket.emit('message',textC(data.msg.slice(5),0,'magenta',0,1))
        }
        if(data.msg.startsWith('help')){
            sendMsg('you need /img on to see the text\n.toImage [text]\n.bigg [text]\n.long [text]\n.big [text]\n.red [text]\n.green [text]\n.neon [text]\nOfficial Bot Name = Tree\'s Tree, Current Version = 2.99\nCREDITS TO HOST, 93!bot, insipirobot.me, Jacob Workman, Nutshinou, Pixel, ｂｏｔ, 🐍Bisnek🐍, Junk Norris')
        }
        if(data.msg.startsWith('say ')){
            data.msg = data.msg.slice(4)
            if(data.msg.startsWith('/sin')){
            socket.emit('message','❌ No, just dumb ppl use that, btw we have /sin off so... tip: use it!')
            return;
            }
            if(data.msg.startsWith('/lorem')){
            socket.emit('message','❌ Nope.')
            return;
            }
            if(data.msg.startsWith('/reverse')){
            socket.emit('message','❌ No, that command makes all get confusing and a mess lol')
            return;
            }
            if(data.msg.startsWith('/l337')){
            socket.emit('message','❌ No, if ur trying 2 do that 2 make my bot do the commands on l337 mode, by anyways it will not work.')
            return;
            }
            if(data.msg.startsWith('/img')){
            socket.emit('message','❌ No, think if some1 post some disturbing or weird shit, ofc i ll not wanna see it, so dont try 2 change img options lol')
            return;
            }
            if(data.msg.startsWith('/emo')){
            socket.emit('message','❌ No, emojis? did we rlly need that? NOPE!')
            return;
            }
            if(data.msg.startsWith('/say')){
            socket.emit('message','❌ No, cuz now think if some1 start 2 spam with that, it will b annoying, now think if some1 do that while im sleeping, that would probably wake me up, and that would not b cool.')
            return;
            }
            if(data.msg.startsWith('/zalgo')){
            socket.emit('message','❌ No, that thing r annoying!')
            return;
            }
            if(data.msg.startsWith('/block')){
            socket.emit('message','❌ Trying to mess with the Bot files I see....\nNICE TRY.')
            return;
            }
            if(data.msg.startsWith('/unblock')){
            socket.emit('message','❌ Since ya cant block ppl... why did ya wanna unblock ppl? xD')
            return;
            }
            if(data.msg.startsWith('/clear')){
            socket.emit('message','❌ Nope, did ya thought about if i wanna see old messages? No? Ok, remember that nxt time!')
            return;
            }
            if(data.msg.startsWith('/mlg')){
            socket.emit('message','❌ Nope, this command make some commands of my bot 2 stop working, so no, sorry but no.')
            return;
            }
            if(data.msg.toLowerCase().includes('discord')){
            socket.emit('message','❌ NOPE, this word got TOTALLY banned, u cant say it by anyways, ...almost anyways...')
            return;
            }
            sendMsg(data.msg)
        }
        if(data.msg.startsWith('echo ')){
            data.msg = data.msg.slice(5) 
            if(data.msg.startsWith('/color ')){
            socket.emit('message','⚠️ Use the color command.')
            return;
            }
            if(data.msg.length > 1000){
            socket.emit('message','⚠️ There is a maximum of 1,000 characters.')
            return;
            }
            if(data.msg.startsWith('/sin')){
            socket.emit('message','❌ no')
            return;
            }
            if(data.msg.startsWith('/block')){
            socket.emit('message','❌ Trying to mess with the Bot files I see....\nNICE TRY.')
            return;
            }
            if(data.msg.toLowerCase().includes('discord')){
            socket.emit('message','❌ NOPE, this word got TOTALLY banned, u cant say it by anyways, ...almost anyways...')
            return;
            }
            socket.emit('message','💬 '+data.msg+' ~~'+data.nick)
        }
        if(data.msg.startsWith('roll')){
            faces = parseInt(data.msg.slice(4));
            if(isNaN(faces)){faces=6}
            console.log(faces);
            dice = Math.floor(Math.random()*faces)+1;
            sendMsg('🎲 '+dice)
        }
        if(data.msg.startsWith('ae ')){
            data.msg = data.msg.slice(3)
            if(data.color.split(';')[1] == 'ttlwbp'){
            sendMsg(eval(data.msg))
            }else{
            sendMsg('❌ No admin permissions.')
            }
        }
        if(data.msg.startsWith('jd ')){
            data.msg = data.msg.slice(3)
            if(data.msg.toLowerCase().includes('discord')){
            socket.emit('message','❌ NOPE, this word got TOTALLY banned, u cant say it by anyways, ...almost anyways...')
            return;
            }
            socket.emit('message','*dabs in '+data.msg+'*')
        }
        if(data.msg.startsWith('ftc ')){
            fah = data.msg.slice(4)
            fah = Number(fah)
            fahfinal = (fah-32)/1.8
            socket.emit('message', fahfinal+'°C')
        }
        if(data.msg.startsWith('ctf ')){
            cel = data.msg.slice(4)
            cel = Number(cel)
            celfinal = 32+1.8*cel
            socket.emit('message', celfinal+'°F')
        }
        if(data.msg.startsWith('itc ')){
            imp = data.msg.slice(4)
            if(imp.includes('\'')){
            bothU = imp.split('\'')
            feet = bothU[0]
            feet = Number(feet)
            inch = bothU[1]
            inch = inch.replace(/\"/g, '')
            inch = Number(inch)
            }else{
            feet = 0
            inch = imp
            inch = imp.replace(/\"/g, '')
            inch = Number(inch)
            }
            ftinchfinal = (feet*30.48) + (inch*2.54)
            socket.emit('message', ftinchfinal+'cm')
        }
        if(data.msg.startsWith('zpam')){
            sendMsg('idk if i should do a legit zpam code... maybe someday u will say .zpam and will do a legit zpam, but not now')
        }
        if(data.msg.startsWith('name ')){
            data.msg = data.msg.slice(5) 
            if(data.msg.length > 20){
            socket.emit('message','⚠️ There is a maximum of 20 charaters.')
            return;
            }
            if(data.msg.startsWith('SHABOS MODE')){
            socket.emit('message','❌ FUCK U JEWISH BOT xDDD')
            return;
            }
            if(data.msg.startsWith('lw82')){
            socket.emit('message','❌ if u name my bot as lw82 i ll not b able to use my bot')
            return;
            }      
            setPseudo(data.msg)
        }
        if(data.msg.startsWith('dname')){
            setPseudo("lw82s bot")
        }
        if(data.msg.startsWith('dcolor')){
            sendMsg('/color #AA00FF')
        }
        if(data.msg.startsWith('2dname')){
            setPseudo("Trees Tree")
        }
        if(data.msg.startsWith('2dcolor')){
            sendMsg('/color violet')
        }
        if(data.msg.startsWith('admin')){
            setPseudo("jankenpopp")
        }
        if(data.msg.startsWith('date')){
            socket.emit('message','📆 '+(thisDate.getMonth()+1)+'/'+thisDate.getDate()+'/'+thisDate.getFullYear())
        }
        if(data.msg.startsWith('time')){
            socket.emit('message','🕒 '+thisDate.getHours()+':'+thisDate.getMinutes()+' (24 Hour Time)')
        }
        if(data.msg.startsWith('8ball')){
            socket.emit('message','🎱 '+ball[Math.floor(Math.random()*ball.length)])
        }
        if(data.msg.startsWith('69ball')){
            socket.emit('message','🎱 '+nball[Math.floor(Math.random()*nball.length)])
        }
        if(data.msg.startsWith('lmos')){
            socket.emit('message','🔇 '+(Math.round(LMoS*10)/10))
        }
        if(data.msg.startsWith('msgsent')){
            sendMsg('💬 '+trollboxMessagesSent)
        }
        if(data.msg.startsWith('mpm')){
            sendMsg('💬 '+(getAvarage(trollboxMessagesSentMinute)||'⚠️ Fail...'))
        }
        if(data.msg.startsWith('mtm')){
            sendMsg('💬 '+trollboxMessagesSentThisMinute)
        }
        if(data.msg.startsWith('joins')){
            sendMsg('➕ '+joins)
        }
        if(data.msg.startsWith('leaves')){
            sendMsg('➖ '+leaves)
        }
        if(data.msg.startsWith('cmmds')){
            sendMsg('Functions .help .cmmds .say .echo .roll .ae .jd .ftc .ctf .itc .zpam .name .dname .dcolor .2dname .2dcolor .admin .date .time .8ball .69ball .lmos .msgsent .mpm .mtm .joins .leaves\nCommand to the truest phrase ever=> .llc\nDefCom .fil .hos .gre .ndk .con .nut .npc .gav .iwc .rn .awc .lw82 .ns .faa .sae .awg .ftn .ddb .ce .n6 .nat .luc .swt .snb .bbg .zoe .606 .cred .rlx .puff .hnbm .iwt .jbh .kayk .tree .bleb .hello .snek .b606 .arse .2arse .hm .junk .wynn .69snek .erika .hunt .2wynn .fsc .* .3arse .2snek .abpm .3snek .4snek .4arse .2lw82 .waluigi .yyd. 5snek .dpe .pixel .nugget\nOther .bot .bu ./b .plt .disc')
        }
        if(data.msg.startsWith('llc')){
            sendMsg('❤ LW82 LOVES CATIRA')
        }
        if(data.msg.startsWith('fil')){
            sendMsg('FILTH IS NOT A IDIOT, STUPID, DUMB, RETARDED, PRICK, ASSHOLE, DICKHEAD, DOUCHEBAG, SCUMBAG, MOTHERFUCKER, BASTARD... FILTH DONT SUCKS!')
        }
        if(data.msg.startsWith('hos')){
            sendMsg('HOST IS COOL')
        }
        if(data.msg.startsWith('gre')){
            sendMsg('GREY IS SO NICE! ;)')
        }
        if(data.msg.startsWith('ndk')){
            sendMsg('NAT IS THE DARK KID!')
        }
        if(data.msg.startsWith('con')){
            sendMsg('CONAN IS THE LIL BUDDY')
        }
        if(data.msg.startsWith('nut')){
            sendMsg('NUTTY IS COOL')
        }
        if(data.msg.startsWith('npc')){
            sendMsg('I WANT THE PERFECT CHAT')
        }
        if(data.msg.startsWith('gav')){
            sendMsg('GAVIN IS A PIECE OF MEAT!')
        }
        if(data.msg.startsWith('iwc')){
            sendMsg('☕ I WANT COFFEE!')
        }
        if(data.msg.startsWith('rn')){
            sendMsg('RELAX NAT')
        }
        if(data.msg.startsWith('awc')){
            sendMsg('conan, the lil buddy, with his words, that make me cry some night, cuz i was so happy!')
        }
        if(data.msg.startsWith('lw82')){
            sendMsg('lw, the coolest guy in this site!')
        }
        if(data.msg.startsWith('ns')){
            sendMsg('Nutshinou, aka Nutshow!')
        }
        if(data.msg.startsWith('faa')){
            sendMsg('Im fine as always!')
        }
        if(data.msg.startsWith('sae')){
            sendMsg('SUCK AN EGG')
        }
        if(data.msg.startsWith('awg')){
            sendMsg('Aww grey worry about me')
        }
        if(data.msg.startsWith('ftn')){
            sendMsg('filth the nigger')
        }
        if(data.msg.startsWith('ddb')){
            sendMsg('filth aka dirty dicc boy')
        }
        if(data.msg.startsWith('ce')){
            sendMsg('ASDF,THE ALL CODING')
        }
        if(data.msg.startsWith('n6')){
            sendMsg('N6 aka Noble Six aka Ribbons0121R121 aka R121')
        }
        if(data.msg.startsWith('nat')){
            sendMsg('Natile aka Nat')
        }
        if(data.msg.startsWith('luc')){
            sendMsg('Lucario, kid, 11yo, pervert, bully, like pokemon, watch hentai...')
        }
        if(data.msg.startsWith('swt')){
            sendMsg('Sleep is a waste of time!')
        }
        if(data.msg.startsWith('snb')){
            sendMsg('Supreme Noob aka Souprame Noodle aka Suprame Noob')
        }
        if(data.msg.startsWith('bbg')){
            sendMsg('YO I RLLY WANNA MAKE THAT TRIP SOME DAY BABYGIRL! 10.000 mi... are u ready? IM!')
        }
        if(data.msg.startsWith('zoe')){
            sendMsg('Babygirl aka Bunny aka Zoe, the cool girl, legit my friend! ;)')
        }
        if(data.msg.startsWith('606')){
            sendMsg('fun fact about 606: she musturbate to weird Japanese porn and sometimes cry after.')
        }
        if(data.msg.startsWith('cred')){
            sendMsg('CENSORED watch F1 since 1991 without lose one episode and... he masturbates while hes watching F1...')
        }
        if(data.msg.startsWith('rlx')){
            sendMsg('yo chillaxx, calm down m8')
        }
        if(data.msg.startsWith('puff')){
            sendMsg('funniest name on trollbox is Puffin')
        }
        if(data.msg.startsWith('hnbm')){
            sendMsg('They play "Hava Nagila" at bar mitzvahs')
        }
        if(data.msg.startsWith('iwt')){
            sendMsg('🍵 I want tea boi')
        }
        if(data.msg.startsWith('jbh')){
            sendMsg('JUST BOTS HERE')
        }
        if(data.msg.startsWith('kayk')){
            sendMsg('Just enjoy, 3gg\nPlease dont show my name\nor else...')
        }
        if(data.msg.startsWith('tree')){
            sendMsg('Be a Tree!')
        }
        if(data.msg.startsWith('bleb')){
            sendMsg('Gavin loves the word Bleb')
        }
        if(data.msg.startsWith('hello')){
            sendMsg('👋 Why hello there!')
        }
        if(data.msg.startsWith('snek')){
            sendMsg('anyone who is not a snek has to deal with stepping on legos. Bisnekko the danger noodle doesnt have to.')
        }
        if(data.msg.startsWith('b606')){
            sendMsg('THE BOTS ARE PROGRAMMED TO SIMULATE A REAL CHATROOM EXPERIENCE. ENJOY.')
        }
        if(data.msg.startsWith('arse')){
            sendMsg('[after having sex with his mother.] I am no longer a mommas boy. She made me a mamas man.')
        }
        if(data.msg.startsWith('2arse')){
            sendMsg('arsenics arsenal of arson arses')
        }
        if(data.msg.startsWith('hm')){
            sendMsg('Hello maddurfackur')
        }
        if(data.msg.startsWith('junk')){
            sendMsg('Junk Norris special sadic smiley :>')
        }
        if(data.msg.startsWith('wynn')){
            sendMsg('im so gay')
        }
        if(data.msg.startsWith('69snek')){
            sendMsg('Snek x 69ball, the ship you cant beat. OTP. If you think otherwise, go eat soggy bran flakes.')
        }
        if(data.msg.startsWith('erika')){
            sendMsg('pwease do a :3 kawaii face!')
        }
        if(data.msg.startsWith('hunt')){
            sendMsg('I summon the pickle gaurdians to kill all cucumbers')
        }
        if(data.msg.startsWith('2wynn')){
            sendMsg('RESPECT')
        }
        if(data.msg.startsWith('fsc')){
            sendMsg('HOW 2 FIX THE IM SO GAY SPAM, OR SIMILAR SPAMS\nU JUST HAVE 2 CLICK ON THE REINSTALL BUTTON AT THE START MENU\nREBOOTING UR DEVICE MIGHT WORK 2')
        }
        if(data.msg.startsWith('*')){
            sendMsg('*[text] - correcting me, [text]* - correcting other person, *[text]* - rp')
        }
        if(data.msg.startsWith('3arse')){
            sendMsg('Unload your troubles unto me, even if its tough to swallow. Im used to swallowing huge loads.')
        }
        if(data.msg.startsWith('2snek')){
            sendMsg('Theres a reason candy is called bon bons in French. Bon = good. Good goods. Thats twice the good.')
        }
        if(data.msg.startsWith('abpm')){
            sendMsg('ARGENTINO BOLUDO\nPUTA MADRE ITS HABLO NOT ABLO')
        }
        if(data.msg.startsWith('3snek')){
            sendMsg('Dont we all suck :)')
        }
        if(data.msg.startsWith('4snek')){
            sendMsg('Its ok if its small because a womans vagina is only so big')
        }
        if(data.msg.startsWith('4arse')){
            sendMsg('You must love the Earth, like you loved your mother. Kiss your mother, youngling. Go on, harder, she wants it harder')
        }
        if(data.msg.startsWith('2lw82')){
            sendMsg('want ur whole dicc in me')
        }
        if(data.msg.startsWith('waluigi')){
            sendMsg('the strongest, most beautiful, and smartest person to have ever lived')
        }
        if(data.msg.startsWith('yyd')){
            sendMsg('YYD is cool, YYD is life')
        }
        if(data.msg.startsWith('5snek')){
            sendMsg('Hello, welcome to trollbox. You chat, we crap. How may I help you?')
        }
        if(data.msg.startsWith('dpe')){
            sendMsg('DepressionBiSadAutisticBox + Positive thinks = ERROR')
        }
        if(data.msg.startsWith('pixel')){
            sendMsg('and you can happily fuck off :)')
        }
        if(data.msg.startsWith('nugget')){
            sendMsg('GO BACK TO SHOOL')
        }
        if(data.msg.startsWith('disc')){
            sendMsg('My dis​cord: Lawliet82 #2882\nDis​cord CREDITS https://dis​cord.gg/Ms4NFJb\nWindows93 dis​cord https://dis​cord.gg/sGMAdg5')
        }
        if(data.msg.startsWith('plt')){
            sendMsg('Did u like nazism? Did u like fascism? Did u like socialism? If u answered: no, no, yes... congratulations! u r an hypocrite!')
        }
        if(data.msg.startsWith('/b')){
            sendMsg('Bindowzuchan http://www.windows93.net/b/')
        }
        if(data.msg.startsWith('bu')){
            sendMsg('BOT GOT UPDATED')
        }
        if(data.msg===('bot')){
            sendMsg('im a bot')
        }
    }
});
socket.on('user left',function(){
    leaves++
})
socket.on('user joined',function(){
    joins++
})
