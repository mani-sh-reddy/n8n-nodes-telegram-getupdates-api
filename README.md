# n8n Telegram poll-based node for servers behind firewalls.

This is an n8n community node. Use this to receive incoming Telegram updates (messages, reactions, posts, etc) using long polling.

Long polling is a pull-based method for receiving updates where the bot repeatedly calls the Telegram Bot API's getUpdates method to retrieve new updates. This an alternative method where Telegram pushes updates to the bot's server via webhook.

The existing n8n Telegram Trigger node uses webhooks, which require:
- A publicly accessible HTTPS URL​
- Registering the webhook with Telegram's API​
- Telegram pushing updates to your server​

This polling-based node instead:
- ✅ Pulls updates from Telegram's servers
- ✅ Requires no public URL or webhook setup
- ✅ Works with servers behind a firewall or on private networks
- ✅ Better suited for self-hosted n8n setups

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)
[Compatibility](#compatibility)  
[Usage](#usage)  <!-- delete if not using this section -->  
[Resources](#resources)  
[Version history](#version-history)  <!-- delete if not using this section -->  

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

This node supports the following triggers:
- **message:** New incoming message of any kind - text, photo, sticker, etc.
- **edited_message:** New version of a message that is known to the bot and was edited. This update may at times be triggered by changes to message fields that are either unavailable or not actively used by your bot.
- **channel_post:** New incoming channel post of any kind - text, photo, sticker, etc.
- **edited_channel_post:** New version of a channel post that is known to the bot and was edited. This update may at times be triggered by changes to message fields that are either unavailable or not actively used by your bot.
- **business_connection:** The bot was connected to or disconnected from a business account, or a user edited an existing connection with the bot
- **business_message:** New message from a connected business account
- **edited_business_message:** New version of a message from a connected business account
- **deleted_business_messages:** Messages were deleted from a connected business account
- **message_reaction:** A reaction to a message was changed by a user. The bot must be an administrator in the chat and must explicitly specify "message_reaction" in the list of allowed_updates to receive these updates. The update isn't received for reactions set by bots.
- **message_reaction_count:** Reactions to a message with anonymous reactions were changed. The bot must be an administrator in the chat and must explicitly specify "message_reaction_count" in the list of allowed_updates to receive these updates. The updates are grouped and can be sent with delay up to a few minutes.
- **inline_query:** New incoming inline query
- **chosen_inline_result:** The result of an inline query that was chosen by a user and sent to their chat partner. Please see our documentation on the feedback collecting for details on how to enable these updates for your bot.
- **callback_query:** New incoming callback query
- **shipping_query:** New incoming shipping query. Only for invoices with flexible price
- **pre_checkout_query:** New incoming pre-checkout query. Contains full information about checkout
- **purchased_paid_media:** A user purchased paid media with a non-empty payload sent by the bot in a non-channel chat
- **poll:** New poll state. Bots receive only updates about manually stopped polls and polls, which are sent by the bot
- **poll_answer:** A user changed their answer in a non-anonymous poll. Bots receive new votes only in polls that were sent by the bot itself.
- **my_chat_member:** The bot's chat member status was updated in a chat. For private chats, this update is received only when the bot is blocked or unblocked by the user.
- **chat_member:** A chat member's status was updated in a chat. The bot must be an administrator in the chat and must explicitly specify "chat_member" in the list of allowed_updates to receive these updates.
- **chat_join_request:** A request to join the chat has been sent. The bot must have the can_invite_users administrator right in the chat to receive these updates.
- **chat_boost:** A chat boost was added or changed. The bot must be an administrator in the chat to receive these updates.
- **removed_chat_boost:** A boost was removed from a chat. The bot must be an administrator in the chat to receive these updates.

## Credentials

To use this node, you need a Telegram Bot API token. This requires creating a bot through Telegram's BotFather.

1. Open Telegram and search for @BotFather (look for the verified account with a blue checkmark)​.
2. Start a conversation and send the /newbot command​.
3. Follow the prompts to set up your bot.
4. BotFather will generate an API token that looks like: _123456789:ABCdefGHIjklMNOpqrsTUVwxyz​_
5. In n8n, create a new credential of type "Telegram Bot Token".
6. Paste your bot token into the Bot Token field​ and save.

**_Security Note: Never share your bot token publicly or commit it to version control. Anyone with this token can control your bot.​_**

## Compatibility

Requires n8n version 1.0.0 or later

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
* [Telegram Bot API - Getting updates](https://core.telegram.org/bots/api#getting-updates)

