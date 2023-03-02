package com.goldenPig.admin.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;

import com.goldenPig.member.domain.MemberVO;
import com.goldenPig.mybatis.config.MyBatisConfig;
import com.goldenPig.notice.domain.NoticeVO;

public class AdminDAO {

	public SqlSession sqlSession;
	
	public AdminDAO() {
		sqlSession = MyBatisConfig.getSqlSessionFactory().openSession(true);
	}
	
	public List<MemberVO> selectAll() {
		return sqlSession.selectList("admin.selectAll");
	}
	
	public Long getTotalMember() {
		return sqlSession.selectOne("admin.getTotalMember");
	}

//	관리자 공지사항 전체 조회
	public List<NoticeVO> adminNoticeSelectAll(Map<String, Object> pageMap) {
		return sqlSession.selectList("notice.adminNoticeSelectAll", pageMap);
	}
	
//	게시글 총 개수
	public Long getTotal() {
		return sqlSession.selectOne("notice.getTotal");
	}
	
//	관리자 공지사항 상세보기
	public NoticeVO adminNoticeSelect(Long noticeId) {
		return sqlSession.selectOne("notice.adminNoticeSelect", noticeId);
	}
	
//	관리자 공지사항 수정
	public void adminNoticeUpdate(NoticeVO noticeVO) {
		sqlSession.update("notice.adminNoticeUpdate", noticeVO);
	}
	
//	관리자 공지사항 작성
	public void adminNoticeInsert(NoticeVO noticeVO) {
		sqlSession.insert("notice.adminNoticeInsert", noticeVO);
	}
	
//	관리자 공지사항 삭제
	public void adminNoticeDelete(Long noticeId) {
		sqlSession.delete("notice.adminNoticeDelete", noticeId);
	}
	
}
