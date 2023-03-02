/*게시글 목록*/
showList();

function showList(){
	boards = JSON.parse(boards);
	const $ul = $("#content ul");
	let text = "";
	boards.forEach(board => {
		text += `
			<li>
				<div class="content-body">
					<div class="question-card">
						<article class="card">
							<div class="card-main">
								<header class="card-header">
									<a href="${pageContext.request.contextPath}/boardDetail.board?boardId=${board.boardId}">
					                    <div class="profile">
					                        <div><img src="${board.profileImgPath}" width="15px"></div>
					                        <h6 class="writer">${board.memberName}</h6>
					                    </div>
										<h1 class="card-header-title">${board.boardTitle}</h1>
									</a>
								</header>
								<div class="card-content">
									<div class="card-footer">
										<div class="flex-justify-between">
											<div class="flex-items-center">
												<div class="card-label-icon">
													<img class="answer" src="${pageContext.request.contextPath}/static/img/board/answer.png">
													<span>${board.answerCount}</span>
												</div>
												<div class="card-label-icon">
													<img class="star" src="${pageContext.request.contextPath}/static/img/board/star-icon.png">
													<span>${board.readCount}</span>
												</div>
												<div class="card-label-icon">
													<img class="heart" src="${pageContext.request.contextPath}/static/img/board/heart.png">
													<span>${board.likeCount}</span>
												</div>
											</div>
											<span class="card-header-infomation">${board.boardRegisterDate}</span>
										</div>
									</div>
								</div>
							</div>
						</article>
					</div>
				</div>
		    </li>
			`;
	});
/*		        <div>
		            <a href="javascript:location.href='${contextPath}/board/detailOk.board?boardId=${board.boardId}&page=${page}&keyword=${keyword}'">
		                <section class="content-container">
		                    <div class="profile">
		                        <div><img src="${contextPath}/static/images/profile.png" width="15px"></div>
		                        <h6 class="writer">${board.memberName}</h6>
		                    </div>
		                    <h4 class="title">${board.boardTitle}</h4>
		                    <h6 clss="board-info">
		                        <span class="read-count">조회 ${board.boardReadCount}</span>
		                        <span>·</span>
		                        <span class="date">`+ elapsedTime(board.boardRegisterDate) +`</span>
		                    </h6>
		                </section>
		            </a>
		        </div>*/
	$ul.append(text);
}