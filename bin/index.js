const _ = require("lodash");

class SissionStoreUnit {
  constructor(sessionStore) {
    this.sessionStore = sessionStore;
  }

  /**
   * 根据 session id 获取 session信息
   * @param {String} [sessionId]  session id
   * @returns {Promise<Object|Null>} session 存储的数据
   */
  getSessionData = async (sessionId) => {
    if (!sessionId) {
      return null;
    }
    return await new Promise((resolve, reject) => {
      this.sessionStore.load(sessionId, (error, session) => {
        if (error) {
          return reject(error);
        }
        resolve(session);
      });
    });
  };

  /**
   * 根据 session id 修改 session信息
   * @param {String} [sessionId]  session id
   * @param {String} [setParams]  需要修改的 参数对象
   * 
   */
  setSessionData = async (sessionId, setParams) => {
    if (!sessionId) {
      return;
    }
    const session = await new Promise((resolve, reject) => {
      this.sessionStore.load(sessionId, (error, session) => {
        if (error) {
          return reject(error);
        }
        resolve(session);
      });
    });
  
    if (!session) {return;}

    _.keys(setParams).forEach((key) => {
      _.set(session, key, _.get(setParams, key));
    });
  
    await new Promise((resolve, reject) => {
      session.touch().save((err, success) => {
        if (err) {
          return reject(err);
        }
        resolve(success);
      });
    });
  };

}

module.exports = SissionStoreUnit;
