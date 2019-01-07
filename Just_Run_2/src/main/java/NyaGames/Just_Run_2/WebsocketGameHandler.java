package NyaGames.Just_Run_2;

import java.util.Collections;
import java.util.Collection;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;

import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

public class WebsocketGameHandler extends TextWebSocketHandler {
	private static Set<WebSocketSession> sessions = Collections.synchronizedSet(new HashSet<WebSocketSession>());
	ObjectMapper mapper = new ObjectMapper();
	boolean debug = true;
	GameController gameController = new GameController();

	// Invoked after WebSocket negotiation has succeeded and the WebSocket
	// connection is opened and ready for use.
	public void afterConnectionEstablished(WebSocketSession session) throws Exception {
		sessions.add(session);
	}

	// Invoked after the WebSocket connection has been closed by either side, or
	// after a transport error has occurred. Although the session may technically
	// still be open, depending on the underlying implementation, sending messages
	// at this point is discouraged and most likely will not succeed.
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
		sessions.remove(session);
	}

	// Invoked when a new WebSocket message arrives.
	protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
		synchronized (sessions) {
			JsonNode node = mapper.readTree(message.getPayload());
			ObjectNode json = mapper.createObjectNode();
			
			switch (node.get("type").asText()) {
			case "JOIN":
				if (gameController.getPlayers().size() == 0) {
					Player chaser = gameController.newChaser();

					ObjectNode jsonChaser = mapper.createObjectNode();
					jsonChaser.put("type", chaser.getType());
					jsonChaser.put("id", chaser.getId());
					jsonChaser.put("x", chaser.getX());
					jsonChaser.put("y", chaser.getY());
					jsonChaser.put("score", chaser.getScore());
					
					session.sendMessage(new TextMessage(jsonChaser.toString()));
				}else if (gameController.getPlayers().size() == 1) {
					Player escapist = gameController.newEscapist();

					ObjectNode jsonEscapist = mapper.createObjectNode();
					jsonEscapist.put("type", escapist.getType());
					jsonEscapist.put("id", escapist.getId());
					jsonEscapist.put("x", escapist.getX());
					jsonEscapist.put("y", escapist.getY());
					jsonEscapist.put("score", escapist.getScore());
					
					session.sendMessage(new TextMessage(jsonEscapist.toString()));					
				} 
				break;
			case "GET":
				json.put("type", 'g');
				json.put("size", gameController.getPlayers().size());
				session.sendMessage(new TextMessage(json.toString()));
				break;
			default:
				break;
			}
	}
	}
}
