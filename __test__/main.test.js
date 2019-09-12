const numOfEmailsFromFriend = require("../main");

describe("numOfEmailsFromFriend", () => {
  it("should return 3 even if allEmails have duplicated emails from friends", () => {
    const friendList = [
      "friend@catena-technologies.com",
      "bff@uni.edu.sg",
      "provost@uni.edu.sg",
      "john@doe.com"
    ];
    const allEmails = [
      "enemy@uni.edu.sg",
      "bff@uni.edu.sg",
      "evil@spam.com",
      "bff@uni.edu.sg",
      "friend@catena-technologies.com"
    ];

    expect(numOfEmailsFromFriend(friendList, allEmails)).toBe(3);
  });

  it("should return 3 and ignore null, undefined, empty string even if both parameters contain them", () => {
    const friendList = [
      "friend@catena-technologies.com",
      "bff@uni.edu.sg",
      "provost@uni.edu.sg",
      "john@doe.com",
      ""
    ];
    const allEmails = [
      "enemy@uni.edu.sg",
      "bff@uni.edu.sg",
      "",
      "bff@uni.edu.sg",
      "friend@catena-technologies.com"
    ];

    expect(numOfEmailsFromFriend(friendList, allEmails)).toBe(3);
  });
});
