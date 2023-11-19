import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import tempData from '../../data/tempData';
import { List } from 'native-base';

interface Task {
  id: string;
  text: string;
  done: boolean;
}

const cardListaItens: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskText, setTaskText] = useState<string>('');
  
  const addTask = () => {
    if (taskText.trim() === '') return;

    const newTask: Task = {
      id: Math.random().toString(),
      text: taskText,
      done: false,
    };

    setTasks([...tasks, newTask]);
    setTaskText('');
  };

  const toggleTask = (taskId: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  };

  const removeTask = (taskId: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };
  
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>Lista de Tarefas</Text>
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          style={{
            flex: 1,
            marginRight: 8,
            padding: 8,
            borderColor: 'gray',
            borderWidth: 1,
          }}
          placeholder="Adicione uma tarefa"
          value={taskText}
          onChangeText={(text) => setTaskText(text)}
        />
        <TouchableOpacity
          style={{
            backgroundColor: 'blue',
            padding: 8,
            borderRadius: 4,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={addTask}
        >
          <Text style={{ color: 'white' }}>Adicionar</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={{ marginTop: 16 }}
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => toggleTask(item.id)}
              style={{
                width: 20,
                height: 20,
                borderRadius: 4,
                borderWidth: 1,
                borderColor: 'gray',
                marginRight: 8,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {item.done && (
                <View
                  style={{
                    width: 12,
                    height: 12,
                    backgroundColor: 'blue',
                    borderRadius: 2,
                  }}
                />
              )}
            </TouchableOpacity>
            <Text
              style={{
                flex: 1,
                fontSize: 18,
                marginLeft: 8,
                textDecorationLine: item.done ? 'line-through' : 'none',
              }}
            >
              {item.text}
            </Text>
            <TouchableOpacity onPress={() => removeTask(item.id)}>
              <Text style={{ color: 'red', fontSize: 18 }}>Remover</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default cardListaItens;
