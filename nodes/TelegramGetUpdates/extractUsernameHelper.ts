import { Update } from './telegram.types';

export function extractUsernameFromUpdate(update: Update): string | null {
  // Message update (handles text, photo, video, etc.)
  if (update.message?.from?.username) {
    return String(update.message.from.username);
  }

  // Edited message
  if (update.edited_message?.from?.username) {
    return String(update.edited_message.from.username);
  }

  // Channel post
  if (update.channel_post?.from?.username) {
    return String(update.channel_post.from.username);
  }

  // Edited channel post
  if (update.edited_channel_post?.from?.username) {
    return String(update.edited_channel_post.from.username);
  }

  // Business message
  if (update.business_message?.from?.username) {
    return String(update.business_message.from.username);
  }

  // Edited business message
  if (update.edited_business_message?.from?.username) {
    return String(update.edited_business_message.from.username);
  }

  // Message reaction updated
  if (update.message_reaction?.user?.username) {
    return String(update.message_reaction.user.username);
  }

  // Inline query
  if (update.inline_query?.from?.username) {
    return String(update.inline_query.from.username);
  }

  // Chosen inline result
  if (update.chosen_inline_result?.from?.username) {
    return String(update.chosen_inline_result.from.username);
  }

  // Callback query
  if (update.callback_query?.from?.username) {
    return String(update.callback_query.from.username);
  }

  // Shipping query
  if (update.shipping_query?.from?.username) {
    return String(update.shipping_query.from.username);
  }

  // Pre-checkout query
  if (update.pre_checkout_query?.from?.username) {
    return String(update.pre_checkout_query.from.username);
  }

  // Poll answer - can have either user or voter_chat
  if (update.poll_answer?.user?.username) {
    return String(update.poll_answer.user.username);
  }

  // My chat member (has from field)
  if (update.my_chat_member?.from?.username) {
    return String(update.my_chat_member.from.username);
  }

    // No user information found in this update - return null explicitly
  return null;
}