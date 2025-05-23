#
# Execute this script once to create the database & table
# as well as populating it with initial data
#

import sqlite3
db = sqlite3.connect('db.sqlite')
cursor = db.cursor()

# Drop tables if tables exist

cursor.execute('DROP TABLE IF EXISTS users')
cursor.execute('DROP TABLE IF EXISTS posts')
cursor.execute('DROP TABLE IF EXISTS likes')
cursor.execute('DROP TABLE IF EXISTS comments')
cursor.execute('DROP TABLE IF EXISTS messages')

# Create tables

cursor.execute('''CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    email TEXT NOT NULL,
    image TEXT NOT NULL,
    bio TEXT NOT NULL
)''')

cursor.execute('''CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY,
    image TEXT NOT NULL,
    caption TEXT NOT NULL,
    created_at TEXT NOT NULL,
    user_id INTEGER NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users(id)
)''')

cursor.execute('''CREATE TABLE IF NOT EXISTS likes (
    id INTEGER PRIMARY KEY,
    created_at TEXT NOT NULL,
    post_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users(id)
    FOREIGN KEY(post_id) REFERENCES posts(id)
)''')

cursor.execute('''CREATE TABLE IF NOT EXISTS comments (
    id INTEGER PRIMARY KEY,
    text TEXT NOT NULL,
    created_at TEXT NOT NULL,
    post_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users(id)
    FOREIGN KEY(post_id) REFERENCES posts(id)
)''')

db.execute('''CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY,
    receiver_id INTEGER NOT NULL,
    sender_id INTEGER NOT NULL,
    text TEXT NOT NULL,
    created_at TEXT NOT NULL,
    FOREIGN KEY(receiver_id) REFERENCES users(id)
    FOREIGN KEY(sender_id) REFERENCES users(id)
)''')

# Insert records

db.executemany("INSERT INTO users (id, name, username, password, email, image, bio) VALUES (?, ?, ?, ?, ?, ?, ?)", [
    (1, 'Qiao Ling', 'qiaoling_77', 'hashed_password', 'qiaoling@example.com', 'https://static.myfigurecollection.net/upload/entries/1/320090-48b39.jpg', 'Dieting'),
    (2, 'Lu Guang', 'luguang_92', 'hashed_password', 'luguang@example.com', 'https://pbs.twimg.com/profile_images/1873536351678664704/6IEQ-nVu_400x400.jpg', "Hey there! I'm using Insta"),
    (3, 'Cheng Xiao Shi', 'xiaoshi_03', 'hashed_password', 'xiaoshi@example.com', 'https://pbs.twimg.com/media/FMOCzfWWUAgBbOZ.jpg', 'Yahoooo!!!'),
    (4, 'Li Tian Xi', 'litianxi_09', 'hashed_password', 'litianxi@example.com', 'https://pbs.twimg.com/media/GBmm_28WsAAtfBC.jpg', '><'),
    (5, 'Li Tian Chen', 'litianchen_88', 'hashed_password', 'litianchen@example.com', 'https://s4.anilist.co/file/anilistcdn/character/large/b313878-X0gZ1Q4CJkHf.png', 'Huh?'),
    (6, 'Vein', 'vein_66', 'hashed_password', 'vein@example.com', 'https://i.pinimg.com/236x/08/a3/66/08a366abd1310f5ab4d9873a02c9f903.jpg', 'Hmmmmm'),
    (7, 'Xu Shan Shan', 'xushan_07', 'hashed_password', 'xushan@example.com', 'https://static.wikia.nocookie.net/shiguang-dailiren/images/7/70/Xu_Shanshan_Profile.png/revision/latest?cb=20241101025448', 'Good Morning! Sunshine!'),
    (8, 'Felix', 'felix_44', 'hashed_password', 'felix@example.com', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5lPVtprb5pu2CIhubHijvQ_t9KsCtjkI-cQ&s', 'Need sleeepppp'),
    (9, 'Liu Xiao', 'liuxiao_99', 'hashed_password', 'liuxiao@example.com', 'https://cdn.myanimelist.net/r/200x268/images/characters/11/580922.jpg?s=d5cad682288409f96be03ad09d79f4ec', 'Busy')
])

db.executemany("INSERT INTO messages (receiver_id, sender_id, text, created_at) VALUES (?, ?, ?, ?)", [
    (3, 1, "Xiao Shi! I just found a new café near the bookstore. Let’s go check it out!", "2025-03-27T09:00:00.000Z"),
    (1, 3, "Right now? I’m still in my pajamas.", "2025-03-27T09:02:00.000Z"),
    (3, 1, "So? Just throw on a hoodie. No one will notice.", "2025-03-27T09:05:00.000Z"),
    (1, 3, "You say that like I don’t have bed hair sticking out in five directions.", "2025-03-27T09:07:00.000Z"),
    (3, 1, "That’s what caps are for. Come on, they have matcha lattes!", "2025-03-27T09:10:00.000Z"),
    (1, 3, "Ugh. Fine. You win. Give me ten minutes.", "2025-03-27T09:12:00.000Z"),
    (3, 1, "Make it five. I’m already outside your door.", "2025-03-27T09:15:00.000Z"),
    (1, 3, "WHAT?!", "2025-03-27T09:17:00.000Z"),

    (2, 3, "I'm hungryyyyyyy", "2025-03-27T09:00:00.000Z"),
    (3, 2, "Wanna order something to eat?", "2025-03-27T09:02:00.000Z"),
    (2, 3, "Yeah!", "2025-03-27T09:05:00.000Z"),
    (3, 2, "Ok", "2025-03-27T09:05:00.000Z"),

    (3, 2, "How was the show that day?", "2025-03-27T09:02:00.000Z"),
    (2, 3, "Not bad", "2025-03-27T09:05:00.000Z"),
    (3, 2, "Cool", "2025-03-27T09:05:00.000Z"),

    (2, 3, "Felix, where are you?", "2025-03-27T09:05:00.000Z"),
    (3, 2, "At the corner. Over here!", "2025-03-27T09:02:00.000Z"),
    (2, 3, "Okok I saw you!", "2025-03-27T09:05:00.000Z"),
    
])

db.commit()
db.close()