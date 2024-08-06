
export const sampleChats = [{
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "John Doe",
    _id: "1",
    groupChat: false,
    members: ["1", "2"],
},
{
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "John Boi",
    _id: "2",
    groupChat: true,
    members: ["1", "2"],
},
];

export const sampleUsers = [
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "John Doe",
        _id: "1",
    },
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "John Boi",
        _id: "2",
    },
];

export const sampleNotifications = [
    {
        sender: {
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            name: "John Doe",
        },
        _id: "1",
    },
    {
        sender: {
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            name: "John Boi",
        },
        _id: "2",
    },
];

export const sampleMessage = [
    {
        attachments: [],
        content: "Laund loge mera 25kilo ka",
        _id: "sgdhfhfjkfkfk",
        sender: {
            _id: "user._id",
            name: "Bill Gates",
        },
        chat: "chatId",
        createdAt: "2024-02-12T10:41:30.630z",
    },

    {
        attachments: [
            {
                public_id: "asdsad2",
                url: "https://www.w3schools.com/howto/img_avatar.png",
            },
        ],
        content: "",
        _id: "sgdhfhfjkfkfkwer",
        sender: {
            _id: "asadvdgdgd",
            name: "Rick Ghosh",
        },
        chat: "chatId",
        createdAt: "2024-02-12T10:41:30.630z",
    },
];


export const dashboardData = {
    users: [
        {
            name: "John Doe",
            avatar: "https://www.w3schools.com/howto/img_avatar.png",
            _id: "1",
            username: "john_doe",
            friends: 20,
            groups: 5,
        },
        {
            name: "John Boi",
            avatar: "https://www.w3schools.com/howto/img_avatar.png",
            _id: "2",
            username: "john_boi",
            friends: 80,
            groups: 25,
        },
    ],


    chats:[
        {
            name: "Frond-End Management Team",
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            _id: "1",
            groupChat: false,
            members: [
                {_id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png"},
                {_id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png"},
            ],
            totalMembers: 2,
            totalMessages: 20,
            creator: {
                name: "John Doe",
                avatar: "https://www.w3schools.com/howto/img_avatar.png",
            },
        },
        {
            name: "Back-End Management Team",
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            _id: "2",
            groupChat: false,
            members: [
                {_id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png"},
                {_id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png"},
            ],
            totalMembers: 2,
            totalMessages: 20,
            creator: {
                name: "John Boi",
                avatar: "https://www.w3schools.com/howto/img_avatar.png",
            },
        },
    ],


    messages: [
        {
            attachments: [],
            content: "Laund ka message hai",
            _id: "109",
            sender: {
                avatar: "https://www.w3schools.com/howto/img_avatar.png",
                name: "Chaman",
            },
            chat: "chatId",groupChat: false,
            createdAt: "2024-07-18T10:41:30.630z"
        },
        {
            attachments: [
                {
                    public_id: "asdsad 2",
                    url: "https://www.w3schools.com/howto/img_avatar.png",
                },
            ],
            content: "",
            _id: "200",
            sender: {
                avatar: "https://www.w3schools.com/howto/img_avatar.png",
                name: "Chaman chutiya",
            },
            chat: "chatId",groupChat: true,
            createdAt: "2024-02-18T10:41:30.630z"
        },
    ],
};