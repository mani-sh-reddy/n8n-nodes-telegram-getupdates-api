import type { INodeProperties } from 'n8n-workflow';

export const allowedUpdatesProperty: INodeProperties = {
  displayName: 'Allowed Updates',
  name: 'allowed_updates',
  type: 'multiOptions',
  required: true,
  default: [],
  description: 'A list of the update types you want your bot to receive',
  // eslint-disable-next-line n8n-nodes-base/node-param-multi-options-type-unsorted-items
  options: [
    {
      name: 'All Updates',
      value: 'all_updates',
      description: 'Receive all update types except chat_member, message_reaction, and message_reaction_count (default)',
    },
    {
      name: 'Message',
      value: 'message',
      description: 'New incoming message of any kind - text, photo, sticker, etc',
    },
    {
      name: 'Edited Message',
      value: 'edited_message',
      description: 'New version of a message that is known to the bot and was edited. This update may at times be triggered by changes to message fields that are either unavailable or not actively used by your bot.',
    },
    {
      name: 'Channel Post',
      value: 'channel_post',
      description: 'New incoming channel post of any kind - text, photo, sticker, etc',
    },
    {
      name: 'Edited Channel Post',
      value: 'edited_channel_post',
      description: 'New version of a channel post that is known to the bot and was edited. This update may at times be triggered by changes to message fields that are either unavailable or not actively used by your bot.',
    },
    {
      name: 'Business Connection',
      value: 'business_connection',
      description: 'The bot was connected to or disconnected from a business account, or a user edited an existing connection with the bot',
    },
    {
      name: 'Business Message',
      value: 'business_message',
      description: 'New message from a connected business account',
    },
    {
      name: 'Edited Business Message',
      value: 'edited_business_message',
      description: 'New version of a message from a connected business account',
    },
    {
      name: 'Deleted Business Messages',
      value: 'deleted_business_messages',
      description: 'Messages were deleted from a connected business account',
    },
    {
      name: 'Message Reaction',
      value: 'message_reaction',
      description: 'A reaction to a message was changed by a user. The bot must be an administrator in the chat and must explicitly specify "message_reaction" in the list of allowed_updates to receive these updates. The update is not received for reactions set by bots.',
    },
    {
      name: 'Message Reaction Count',
      value: 'message_reaction_count',
      description: 'Reactions to a message with anonymous reactions were changed. The bot must be an administrator in the chat and must explicitly specify "message_reaction_count" in the list of allowed_updates to receive these updates. The updates are grouped and can be sent with delay up to a few minutes.',
    },
    {
      name: 'Inline Query',
      value: 'inline_query',
      description: 'New incoming inline query',
    },
    {
      name: 'Chosen Inline Result',
      value: 'chosen_inline_result',
      description: 'The result of an inline query that was chosen by a user and sent to their chat partner. Please see our documentation on the feedback collecting for details on how to enable these updates for your bot.',
    },
    {
      name: 'Callback Query',
      value: 'callback_query',
      description: 'New incoming callback query',
    },
    {
      name: 'Shipping Query',
      value: 'shipping_query',
      description: 'New incoming shipping query. Only for invoices with flexible price.',
    },
    {
      name: 'Pre Checkout Query',
      value: 'pre_checkout_query',
      description: 'New incoming pre-checkout query. Contains full information about checkout.',
    },
    {
      name: 'Purchased Paid Media',
      value: 'purchased_paid_media',
      description: 'A user purchased paid media with a non-empty payload sent by the bot in a non-channel chat',
    },
    {
      name: 'Poll',
      value: 'poll',
      description: 'New poll state. Bots receive only updates about manually stopped polls and polls, which are sent by the bot.',
    },
    {
      name: 'Poll Answer',
      value: 'poll_answer',
      description: 'A user changed their answer in a non-anonymous poll. Bots receive new votes only in polls that were sent by the bot itself.',
    },
    {
      name: 'My Chat Member',
      value: 'my_chat_member',
      description: 'The bots chat member status was updated in a chat. For private chats, this update is received only when the bot is blocked or unblocked by the user.',
    },
    {
      name: 'Chat Member',
      value: 'chat_member',
      description: 'A chat members status was updated in a chat. The bot must be an administrator in the chat and must explicitly specify "chat_member" in the list of allowed_updates to receive these updates.',
    },
    {
      name: 'Chat Join Request',
      value: 'chat_join_request',
      description: 'A request to join the chat has been sent. The bot must have the can_invite_users administrator right in the chat to receive these updates.',
    },
    {
      name: 'Chat Boost',
      value: 'chat_boost',
      description: 'A chat boost was added or changed. The bot must be an administrator in the chat to receive these updates.',
    },
    {
      name: 'Removed Chat Boost',
      value: 'removed_chat_boost',
      description: 'A boost was removed from a chat. The bot must be an administrator in the chat to receive these updates.',
    }
  ]
};