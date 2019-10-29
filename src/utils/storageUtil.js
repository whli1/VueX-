// 引入vue
import Vue from 'vue';

// 定义LocalStorage类
export default class storageUtil {

  /**
   * 添加值
   * @param todo_key
   * @param value
   */
  static setTodoItems(todo_key, value) {
    return  localStorage.setItem(todo_key, JSON.stringify(value));
  }

  /**
   * 获取值
   * @param todo_key
   * @returns {string}
   */
  static getTodoItems(todo_key) {
    return JSON.parse(localStorage.getItem(todo_key) || '[]');
  }
}

