/**
 * @fileoverview 시스템에 사용 할 환경 변수 설정 및 반환
 * node의 첫 번째 인자(process.argv[2])를 환경을 결정하는데 사용함
 * 
 * 사용 가능한 환경 목록 
 * 변경 할 변수를 덮어 쓰거나 추가하고 싶은 변수 추가하여 사용
 * @type {Object}
 */

 const environments = {
     //로컬 테스트 환경
     test: {
         port: 9000
     },

     //개발 서버 환경
     development: {
         port: 9001
     },

     // 운영 서버 환경
     production: {
         port: 9000
     }
 };

 /**
  * 공통 환경
  * @type {Object}
  */

  const commonEnvironment = {
      port: 9001,
  };

  /**
   * 오브젝트 extend
   * target의 가장 왼쪽의 object를 기준으로 다른 object를 병합함
   * @param {...Object} target 병합 할 object 목록
   * @return {Object} 병합 기준이 된 Object의 참조
   */
  function extend(target) {
      var sources = [].slice.call(arguments, 1);

      sources.forEach(function(element) {
          element && Object.keys(element).forEach(prop => target[prop] = element[prop])
      });
      return target;
  }

  /**
   * 서버 실행 시 파라미터에 따른 환경 결정
   * 기본값은 로컬 테스트 환경으로 함
   */
  const envName = process.argv[2] || 'test';
  const environment = environments[envName];

  //공통 환경 오브젝트와 특정 환경 오브젝트 병합
  const merged = extend({}, commonEnvironment, environment);

  module.exports = merged;
