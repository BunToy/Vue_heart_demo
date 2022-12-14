import Vue from 'vue'

Vue.component('zpagenav', {
	template: `<nav class="zpagenav">` +
		`<ul class="page-ul">` +
		`<li v-bind:key="index" v-for="(item,index) in pageList" v-bind:class ="item.class" @click.stop="setPage(item)" v-html="item.html">` +
		`</li>` +
		`</ul>` +
		`<span class="total">共 {{total}} 条</span>` +
		`</nav>`,
	props: {
		prevHtml: String,
		nextHtml: String,
		page: Number,
		total: Number,
		pageSize: Number,
		maxPage: Number
	},
	computed: {
		pageList: function() {
			var _this = this,
			pageList = [];
			let pageCount = Math.ceil(_this.total / _this.pageSize);
			//console.log("pageCount:"+pageCount)
			let page = _this.page;
			//console.log("page:"+page)
			let prevHtml = _this.prevHtml ? _this.prevHtml : '&lt;';
			//console.log("prevHtml:"+prevHtml)
			let nextHtml = _this.nextHtml ? _this.nextHtml : '&gt;';
			//console.log("nextHtml:"+nextHtml)
			let maxPage = _this.maxPage ? _this.maxPage : 9;
			//console.log("maxPage:"+maxPage)
			let hasPrev = page > 1;
			let hasNext = page < pageCount;
			//console.log("hasPrev:"+hasPrev)
			//console.log("hasNext:"+hasNext)
			//上一页
			pageList.push({
				class: hasPrev ? '' : 'disabled',
				page: hasPrev ? page - 1 : page,
				html: prevHtml
			});

			//首页
			pageList.push({
				class: page == 1 ? 'active' : '',
				page: 1,
				html: 1
			});

			var p0 = Math.floor(maxPage / 2);  //4
			var p1 = 1 + 2 + p0; //首页+省略至少2个页码+中间页面数的一半  5

			var start, end;
			if(page >= p1) {
				start = page - p0;
				//前置省略号
				pageList.push({
					class: 'dot',
					page: page,
					html: '...'
				});
			} else {
				start = 2;
			}
			//console.log("page:"+page)
			//console.log("p0:"+p0)
			var p2 = Number(page) + Number(p0);
			if(p2 < pageCount) {
				end = p2;
			} else {
				end = pageCount - 1;
			}
			//console.log("p2:"+p2)
			//console.log("start:"+start)
			//console.log("end:"+end)

			//页码列表
			for(let i = start; i <= end; i++) {
				pageList.push({
					class: page == i ? 'active' : '',
					page: i,
					html: i
				});
			}

			if(end < pageCount - 1) {
				//后置省略号
				pageList.push({
					class: 'dot',
					page: page,
					html: '...'
				});
			}

			//尾页
			if(pageCount > 1) {
				pageList.push({
					class: page == pageCount ? 'active' : '',
					page: pageCount,
					html: pageCount
				});
			}

			//下一页
			pageList.push({
				class: hasNext ? '' : 'disabled',
				page: hasNext ? page + 1 : page,
				html: nextHtml
			});

			return pageList;
		}
	},
	methods: {
		setPage: function(item) {

			if(item.class == '') {
				this.$emit('pagehandler', item.page);
			}
		}
	}
});
