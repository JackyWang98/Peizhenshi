// 模拟对话内容
const messages = [
  {
    sender: "assistant",
    text: "你好呀，我是小H，一名兼职陪诊师，同时也是一名医疗相关专业的大三学生。",
  },
  { sender: "user", text: "陪诊师听起来挺特别的，这份工作是做什么的？" },
  {
    sender: "assistant",
    text: "主要是陪老人、孕妇、宝妈和一些年轻人看病，帮助他们挂号、排队、取药等。",
  },
  { sender: "user", text: "哪一类人对陪诊师的需求最多呢？" },
  { sender: "assistant", text: "你可能想不到，其实是年轻人的需求量更大。" },
];

// 获取聊天框和按钮
const chatBox = document.getElementById("chat-box");
const nextButton = document.getElementById("next-button");

// 当前对话索引
let currentIndex = 0;

// 加载下一条对话
function loadNextMessage() {
  if (currentIndex < messages.length) {
    const message = messages[currentIndex];

    // 创建聊天气泡
    const bubble = document.createElement("div");
    bubble.classList.add("chat-bubble", message.sender);
    bubble.textContent = message.text;

    // 添加到聊天框
    chatBox.appendChild(bubble);

    // 滚动到底部
    chatBox.scrollTop = chatBox.scrollHeight;

    // 检查是否是特定消息
    if (message.text === "你可能想不到，其实是年轻人的需求量更大。") {
      // 在这句话插入之后，改变按钮的文本和样式
      nextButton.textContent = "为什么呢";
      nextButton.style.backgroundColor = "#4CAF50"; // 例如，改变按钮背景颜色
      nextButton.style.color = "#fff"; // 改变按钮文字颜色

      // 添加按钮点击事件
      nextButton.addEventListener("click", function () {
        // 隐藏聊天框
        document.querySelector(".chat-container").style.display = "none";
        // 显示标题
        document.getElementById("why-young-people").style.display = "block";
      });
    }

    // 增加索引
    currentIndex++;
  } else {
    // 对话结束时隐藏按钮并抛出问题
    nextButton.style.display = "none";
    chatBox.appendChild(question);
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}

// 按钮点击事件
nextButton.addEventListener("click", loadNextMessage);

// 初始化第一条对话
loadNextMessage();
