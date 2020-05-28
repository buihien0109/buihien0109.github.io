const url =
  "http://api.stackexchange.com/2.2/questions?site=stackoverflow&tagged=javascript";

const questionList = document.createElement("ul");
document.body.appendChild(questionList);

const responseData = fetch(url).then((response) => response.json());
responseData.then(({ items, has_more, quota_max, quota_remaining }) => {
  for (const { title, score, owner, link, answer_count } of items) {
    const listItem = document.createElement("li");
    questionList.appendChild(listItem);
    const a = document.createElement("a");
    listItem.appendChild(a);
    a.href = link;
    a.textContent = `[${score}] ${title} (by ${
      owner.display_name || "somebody"
    })`;
  }
});
