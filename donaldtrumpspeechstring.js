// citation
// http://on.wsj.com/1IjbPUU


var opener = ["I'll tell you this, ","Listen ", "Let me be clear" , "So nice, thank you very much. That's really nice. Thank you, ", "Our country is in serious trouble ",
"We don't have victories anymore, ", "When Mexico sends its people, they're not sending their best. They're not sending you, ", "Think of it, ", "Our enemies are getting stronger and stronger by the way, and we as a country are getting weaker, ", 
"It's a disaster, ", "Here's what I think, ", "I'll tell you what,", "Now, our country needs - our country needs a truly great leader,", "We need a leader that wrote \"The Art of the Deal\",",
"We need a leader that can bring back our jobs,", "Our vets have been abandoned,","We need - we need somebody - we need somebody that literally will take this country and make it great again,",
"We have people that aren't working, ","I'm going to tell you - thank you,", "We have people that aren't smart,", "You never saw anything like it,", "We have all the cards, but we don't know how to use them,",
"Everybody thought the deal was dead,", "Let me give you the bad news,", "Now, here's what is going to happen,", "So under President Trump, here's what would happen,",
"I'm really rich,", "We got to make the country rich,", "We got nothing but problems,", "We've got nothing,", "Here's what's going to happen,", "There is so much wealth out there that can make our country so rich again, and therefore make it great again,",
"We're dying,", "We need money,", "We need the right people,", "In two seconds, they give me whatever I wanted,", "We have losers,", "We have people that are selling this country down the drain,", "Now, it's very interesting,",
"Number one, we're really good,","Sadly, the American dream is dead,", "I know what needs to be done to make America great again,","We, the citizens of America, are now joined in a great national effort to rebuild our country and restore its promise for all of our people,","We will face challenges, we will confront hardships, but we will get the job done,","Their triumphs have not been your triumphs,",
"So I can only say that I am with you 1,000 percent,","In fact, when I first started, I said, oh, no,"," I just wanted to really say that I love you, I respect you.  There's nobody I respect more,",]


var sentences = [" I love the people that like $TOPIC.", "$TOPIC is really headed in the wrong direction with a president who is doing an absolutely terrible job.",
 "$TOPIC are collapsing around us, and many of the problems we've caused.", "Washington is broken, and $TOPIC is in serious trouble and total disarray.", 
 "And I'm a conservative, actually very conservative, and I'm a Republican.", "Now everything about $TOPIC was a lie.", "Now, we have to build a fence for $TOPIC. And it's got to be a beauty.",
 "Who can build better $TOPIC than Trump?", "You can have $TOPIC coming across the border.", "Again, the politicians talk about $TOPIC and they do nothing about it.",
 " I get sued all the time, okay.  I run a big business.", "We used to have victories, but we don't have them. ", "When was the last time anybody saw us beating, let's say, China in a $TOPIC deal? They kill us.",
 "I beat China all the time. All the time.", "When was the last time you saw $TOPIC in Tokyo? It doesn't exist, folks.", "The U.S. has become a dumping ground for everybody else's $TOPIC." ,
 "$TOPIC is coming from more than Mexico.", "$TOPIC is coming from all over South and Latin America, and it's coming probably - probably - from the Middle East.", "So now ISIS has the $TOPIC, and what they don't have, Iran has.",
 "And I will tell you this, and I said it very strongly, years ago, I said - and I love $TOPIC.","I want to have the strongest military that we've ever had, so we need $TOPIC more now than ever.",
 "We have wounded $TOPIC, who I love, I love - they're great - all over the place, thousands and thousands of wounded $TOPIC.", "We have a disaster called the big lie: $TOPIC. $TOPIC.",
 "Yesterday, it came out that costs are going up for $TOPIC up 29, 39, 49, and even 55 percent, and deductibles are through the roof.", "When was the last time you heard $TOPIC is killing us?", 
 "I watched our police and our firemen down at 7/11, down at the World Trade Center right after it came down.", "$TOPIC makes it impossible for our companies to compete, impossible. They're killing us.", 
 "And people are saying, \"What's going on? I just want a $TOPIC. Just get me a $TOPIC. I don't need the rhetoric. I want a $TOPIC.\"",
 "Hey, I have $TOPIC. I have to tell you.", "$TOPIC have been abandoned.", "We need somebody that can take the brand of $TOPIC and make it great again. It's not great again.",
 "I'll bring back our $TOPIC from China, from Mexico, from Japan, from so many places.", "I'll bring back our $TOPIC, and I'll bring back our money.", "Our president doesn't have a clue. He's a bad negotiator.",
 "$TOPIC can be wonderful if you have smart people, but we have people that are stupid.", "But with all our problems with $TOPIC, with all our problems with everything - everything, they got away with it again.",
 "And, you know, China comes over and they dump all their $TOPIC, and I buy it. I buy it, because, frankly, I have an obligation to buy it.",
 "They wanted $TOPIC secrets.", "Hey, I'm not saying they're stupid. I like $TOPIC.", "I sell apartments for - I just sold an apartment for $15 million to a $TOPIC", "I love $TOPIC. People say, \"Oh, you don't like $TOPIC?\"",
 "$TOPIC, you go there now, roads, bridges, schools, you never saw anything like it.", "China have $TOPIC that make the George Washington Bridge look like small potatoes. And they're all over the place.",
 "Now China is going militarily. They're building a $TOPIC island in the mid $2.5 billion $TOPIC factory in Mexico and that you're going to take your $TOPIC and sell them to the United States zero tax, just flow them across the border.\"",
 "I don't need anybody's $TOPIC. It's nice. I don't need anybody's $TOPIC.", "We got $TOPIC that  needs equipment all over the place.", "We got $TOPIC weapons that are obsolete.",
 "We've got $TOPIC that's going to be destroyed if somebody like me doesn't bring money into the country.", "$TOPIC, they make $1 billion a day. $1 billion a day.",
 "Do you really think that these people are interested in $TOPIC?", "$TOPIC without us is gone.","$TOPIC is in big, big trouble", "I've employed - I've employed tens of thousands of $TOPIC over my lifetime.", 
 "It's $TOPIC. You know, it's $TOPIC.", "In fact, one of the big banks came to me and said, \"Donald, you don't have enough $TOPIC. Could we loan you 4 billion $TOPIC\"? I said, \"I don't need it. I don't want it. And I've been there. I don't want it.\"",
 "I would build a great $TOPIC, and nobody builds $TOPIC better than me, believe me, and I'll build them very inexpensively, I will build a great, great $TOPIC on our southern border. And I will have Mexico pay for that $TOPIC.", 
 "Nobody would be tougher on $TOPIC than Donald Trump. Nobody.", "I will stop Iran from getting $TOPIC. And we won't be using a man like Secretary Kerry that has absolutely no concept of negotiation, who's making a horrible and laughable deal, who's just being tapped along as they make weapons right now, and then goes into a bicycle race at 72 years old, and falls and breaks his leg. I won't be doing that. And I promise I will never be in a bicycle race. That I can tell you.",
 "End - end $TOPIC talk. $TOPIC talk should - it is a disaster.", "Bush is totally in favor of $TOPIC.",  "Save $TOPIC.", "And strengthen our military and take care of our $TOPIC. So, so important.","Together, we will determine the course of $TOPIC, and the world for many, many years to come.","Washington flourished, but the people did not share in its $TOPIC.","The establishment protected itself, but not the $TOPIC of our country.","Everyone is listening to $TOPIC now.",
 "When I was young, we were always winning $TOPIC in this country","We'd win with $TOPIC."," I always used to say, keep the $TOPIC.","We've got to get our $TOPIC industry back, Our $TOPIC industry has been disastrous. They're leaving left and right.",
 "And the other thing we have to do is create new bidding procedures for the $TOPIC industry because they're getting away with murder.","I said that I will be the greatest $TOPIC producer that God ever created."] 

var closer = ["ok?","But I mean, look at the guy in that hat! I love that hat!", "I'll tell you that", "And I have to tell you I'm here, and very strongly here.", 
"So that's the way it is.  Very simple. ", "So I would say that if I run and if I win, I would certainly start by building a very, very powerful border. ", 
"I beat China all the time. All the time. ", "Thank you. It's true, and these are the best and the finest. ", "And it only makes common sense. ", "And it's got to stop and it's got to stop fast.",
"But you don't hear that from anybody else. You don't hear it from anybody else. And I watch the speeches.", "And that's what's happening. And it's going to get worse",
"And we also need a cheerleader.", "And, I will tell you, I love my life. I have a wonderful family. They're saying, \"Dad, you're going to do something that's going to be so tough.\"",
"I will be the greatest jobs president that God ever created. I tell you that.", "So we need people - I'm a free trader.", "That's the difference between China's leaders and our leaders.",
"Believe me, folks. We will do very, very well, very, very well.", "But I wouldn't even waste my time with this one.", "And you say to yourself, \"How does that help us,\" right? \"How does that help us? Where is that good\"? It's not.",
"So I would say, \"Congratulations\". That's the good news.","And by the way, I'm not even saying that in a - that's the kind of mindset, that's the kind of thinking you need for this country.",
"It sounds crass. Somebody said, \"Oh, that's crass.\" It's not crass.", "I'm going to bring money in, and we're going to save it.","There are hundreds of things like that.", 
"People that know me, like me. Does my family like me? I think so, right. Look at my family. I'm proud of my family.", "And now I'm building all over the world, and I love what I'm doing.",
"So, just to sum up, I would do various things very quickly.", "That I can tell you.", "Nobody can do that like me. Believe me. It will be done on time, on budget, way below cost, way below what anyone ever thought.",
"We got it.", "But if I get elected president I will bring it back bigger and better and stronger than ever before, and we will make America great again.",
"Thank you all very much. Thank you. Thank you. Thank you. Thank you. Thank you very much. Thank you. Beautiful. Thank you.","Their victories have not been your victories.","And I always said, in addition to that, keep the oil.",
"Do you agree with that?  What do you think? ",]


