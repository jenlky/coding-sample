// Assumption: friendList does not have duplicate emails
// Time complexity - Best: O(n); Average: O(n); Worst: O(n)
const numOfEmailsFromFriend = (friendList, allEmails) => {
  const hashtable = {};
  for (let myEmail of allEmails) {
    if (myEmail && hashtable[myEmail]) {
      hashtable[myEmail]++;
    } else if (myEmail) {
      hashtable[myEmail] = 1;
    }
  }

  let counter = 0;
  for (let friendMail of friendList) {
    if (friendMail && hashtable[friendMail]) {
      counter += hashtable[friendMail];
    }
  }
  return counter;
};

module.exports = numOfEmailsFromFriend;
