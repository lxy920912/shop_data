'use strict';

import Base from './base.js';
import axios from 'axios';
import xml2json from 'xml-to-json-promise'

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    indexAction() {
        //auto render template file index_index.html
        return this.display();
    }
    async getDuoshouAction(self) {
        await axios.get("http://media4fl.oss-cn-hangzhou.aliyuncs.com/real/sogou_xml/SiteMap.xml")
            .then(function(res) {
                return xml2json.xmlDataToJSON(res.data);
            }).then(function(data) {
                let list = data.sitemapindex.sitemap;
                for (let i = 0; i < list.length; i++) {
                    console.log(list[i].loc)
                }
            }).catch(function() {}, function(err) {
                console.log("cannot get data from DuoshouBang...................");
                console.log(err);
            })
        return self.success("hello");
    }
}